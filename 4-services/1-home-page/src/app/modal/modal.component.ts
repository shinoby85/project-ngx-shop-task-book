import { Component, OnInit } from '@angular/core';
import {ModalService} from "./modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  public content!:any
  public isOpen=false

  constructor(private readonly modalService:ModalService) { }

  ngOnInit(): void {
    this.modalService.modalSequence$.subscribe((data)=>{
      if (!data){
        this.isOpen=false
        return
      }
      this.isOpen=true
      this.content=data
    })
  }


  close() {
    this.modalService.close()
  }
}
