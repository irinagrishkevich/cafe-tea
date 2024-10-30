import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, debounceTime, map, Observable, switchMap} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {FormType} from "../../../types/form.type";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private searchSubject =  new BehaviorSubject<string>('')
  searchTerm$ = this.searchSubject.asObservable();

  constructor(private http: HttpClient) { }



  searchProducts():Observable<ProductType[]>{
    return this.searchTerm$.pipe(
      switchMap((term) => this.http.get<ProductType[]>(environment.apiURL + `tea?search=${term}`)),
    )
  }

  updateSearchTerm(term: string): void {
    this.searchSubject.next(term);
  }

  resetSearch(): void {
    this.searchSubject.next('');
  }



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
