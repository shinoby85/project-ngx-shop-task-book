import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {ModalService} from "./modal.service";



@NgModule({
  declarations: [ModalComponent],
  exports:[ModalComponent],
  imports: [
    CommonModule
  ]
})
export class ModalModule {
  public static forRoot(): ModuleWithProviders<any>{
    return {
      ngModule: ModalModule,
      providers:[
        ModalService
      ]
    }
  }
}
