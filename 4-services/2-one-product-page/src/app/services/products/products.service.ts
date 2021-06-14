import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../../../../../../shared/mocks/4-services/products";
import {filter} from "rxjs/operators";

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  public getProductById(id:string):Observable<IProduct>{
    return this.http.get<IProduct>(`api/products/${id}`)
  }
}
