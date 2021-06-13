import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {catchError, filter, map} from "rxjs/operators";
import {BASE_URL_TOKEN} from "./config";

export interface IRes<T> {
  data: T;
  error?: string;
}

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpResponse<any>> {
    let headers: HttpHeaders = req.headers.append('Content-Type', 'application/json')
    const jsonReq = req.clone({
      url: `${this.baseUrl}${req.url}`,
      headers
    })
    return next.handle(jsonReq)
      .pipe(
        filter(this._HttpResponse),
        map((res: HttpResponse<IRes<any>>) => {
          return res.clone({ body: res.body && res.body.data });
        }),
        catchError(
          (): Observable<never> => {
            return EMPTY;
          }
        )
      )
  }

  public _HttpResponse(ev: HttpEvent<any>): ev is HttpResponse<any> {
    return ev instanceof HttpResponse
  }
}
