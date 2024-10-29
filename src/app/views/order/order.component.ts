import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  displayError: string = 'none';
  displaySuccess: string = 'none';
  formVisible: boolean = true;

  formType: FormGroup;
  is_edit = true



  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.formType = this.fb.group( {
      product: [''],
      name: ['', Validators.required],
      last_name:['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      country:['', Validators.required],
      zip: ['', Validators.required],
      address: ['',Validators.required],
      comment: ''
    })
  }





  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams.subscribe(params =>{
      if (params['product']){
        this.formType.get('product')?.setValue(params['product']);
      }
    })

  }

  createOrder(){
    this.subscriptionOrder = this.productService.createOrder(this.formType.value)
      .subscribe({
        next:(res)=>{
          if (res.success && !res.message){
            this.displaySuccess = 'block'
            this.displayError = 'none'
            this.formVisible = false;
            this.formType.reset()
          } else{
            this.displayError = 'block'
            setTimeout(()=>{
              this.displayError = 'none'
            },3000)
          }
        },
        error:(err)=>{

          alert(err + 'Error creating order')
          this.router.navigate(['/'])
        }
      })

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
    this.subscriptionOrder?.unsubscribe()
  }


}
