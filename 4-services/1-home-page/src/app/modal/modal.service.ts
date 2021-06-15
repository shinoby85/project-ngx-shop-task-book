import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()
export class ModalService {

  public controls$=new Subject()

  constructor() { }

  public open(data:any){
    this.controls$.next(data)
  }
  public close():void{
    this.controls$.next(null)
  }
  public get modalSequence$():Observable<any>{
    return this.controls$.asObservable()
  }
}
