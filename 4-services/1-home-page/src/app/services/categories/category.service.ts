import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {ICategory} from "../../../../../../shared/mocks/4-services/categories";

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {
  }

  public getCategory() {
    return this.http.get<ICategory[]>(`api/categories`)
  }
}
