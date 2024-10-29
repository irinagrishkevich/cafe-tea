import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription, tap} from "rxjs";
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  loading: boolean = false;

  product: ProductType

  private subscription: Subscription | null = null
  constructor(private activeRoute: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0
    }
  }

  ngOnInit(): void {
this.loading = true;
    this.subscription = this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.productService.getProduct(+params['id'])
          .pipe(
            tap(() => {
              this.loading = false
            })
          )
          .subscribe( {
            next: (data) => {
              this.product = data
            },
              error: (error) => {
              console.log(error)
              this.router.navigate(['/'])
            }
          })
      }
    })
  }

  ngOnDestroy() {

    this.subscription?.unsubscribe()
  }

}
