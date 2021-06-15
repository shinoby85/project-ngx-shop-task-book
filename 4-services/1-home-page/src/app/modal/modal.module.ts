import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {ModalService} from "./modal.service";



@NgModule({
  declarations: [ModalComponent],
  exports:[ModalComponent],
  providers:[
    ModalService
  ],
  imports: [
    CommonModule
  ]
})
export class ModalModule { }
