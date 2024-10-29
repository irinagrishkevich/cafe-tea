import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {FormType} from "../../../types/form.type";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environment.apiURL + `tea`);
  }

  getProduct(id: number): Observable<ProductType>{
    return this.http.get<ProductType>(environment.apiURL + `tea?id=${id}`)
  }

  createOrder(data: FormType[]){
    return this.http.post<{success: boolean, message?:string}>(environment.apiURL + `order-tea`, data)
  }

}
