import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {Subscription, tap} from "rxjs";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products: ProductType[] = []
  private subscription: Subscription | null = null

  loading: boolean = false


  constructor(private productService: ProductService,
              private router: Router) {}

  ngOnInit(): void {
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
  }

}
