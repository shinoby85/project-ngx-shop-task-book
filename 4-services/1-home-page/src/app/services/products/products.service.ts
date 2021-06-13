import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IProduct} from "../../../../../../shared/mocks/4-services/products";
import {catchError, pluck} from "rxjs/operators";
import {baseUrl} from "../interceptor/config";

@Injectable()
export class ProductsService {


  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`api/products/suggestion`)
  }


}
