import { Component, OnInit } from '@angular/core';
import {ModalService} from "./modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  public product = this.modalService.modalSequence$

  constructor(private readonly modalService:ModalService) { }

  ngOnInit(): void {
  }

}
