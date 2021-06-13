import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {
  }

  public getCategory() {
    return this.http.get(`api/categories`)
  }
}
