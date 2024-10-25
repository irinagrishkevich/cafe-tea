import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../types/product.type";
import {FormType} from "../types/form.type";


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`https://testologia.ru/tea`);
  }

  getProduct(id: number): Observable<ProductType>{
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`)
  }

  createOrder(data: FormType[]){
    return this.http.post<{success: boolean, message?:string}>(`https://testologia.ru/order-tea`, data)
  }

}
