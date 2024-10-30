import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, tap} from "rxjs";
import {Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products: ProductType[] = []
  private subscription: Subscription | null = null
  private subscription2: Subscription | null = null
  private subscription3: Subscription | null = null
  message: string = '';

  loading: boolean = false


  constructor(private productService: ProductService,
              private router: Router) {}

  ngOnInit(): void {
    this.subscription2 =this.productService.searchProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.message = products.length ? '' : 'Ничего не найдено';

      },
      error:(error) => {
        console.error(error);
        this.message = 'Ошибка загрузки продуктов';
      }
    })

    this.subscription3 = this.productService.searchTerm$.subscribe(() => {
      this.productService.searchProducts().subscribe((products) => {
        this.products = products;
        this.message = products.length ? '' : 'Ничего не найдено';
      });
    });





      this.loading = true
      this.subscription = this.productService.getProducts()
        .pipe(
          tap(() => this.loading = false)
        )
        .subscribe({
          next: (data) => {
            this.products = data
          },
          error: (err) => {
            console.log(err)
            this.router.navigate([''])
          }
        })

  }


  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscription2?.unsubscribe();
    this.subscription3?.unsubscribe();
  }

}
