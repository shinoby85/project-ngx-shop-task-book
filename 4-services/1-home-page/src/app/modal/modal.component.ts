import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver, ComponentRef, HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ModalService} from "./modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  @ViewChild('modalContent', {read: ViewContainerRef})
  public modalContent: ViewContainerRef

  public content!: any
  public isOpen = false
  public componentFactory!: ComponentFactory<any>
  public modalRef: ComponentRef<any>


  constructor(private readonly modalService: ModalService,
              private readonly cfr: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
    this.modalService.modalSequence$.subscribe((data) => {
      if (!data) {
        this.close()
        return
      }

      this.isOpen = true
      this.componentFactory = this.cfr.resolveComponentFactory(data.component)
      this.modalRef = this.modalContent.createComponent(this.componentFactory)
      Object.keys(data.context)
        .forEach((key:string)=>{
          this.modalRef.instance[key]=data.context[key]
        })
      this.modalRef.instance.close = data.context.close;
    })
  }

  @HostListener('window:keyup',['$event.keyCode'])
  close(code:number=27) {
    if (code!==27){
      return
    }
    this.isOpen = false
    if (this.modalRef) {
      this.modalRef.destroy()
    }
  }
}
