import { AfterViewInit, Component, ComponentRef, inject, Input, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { DisplayErrorsComponent } from "../display-errors/display-errors.component";
import { Router } from '@angular/router';
import { extractErrors } from '../../functions/extractErorrs';
import { CURD_SERVICE_TOKEN } from '../../providers/providers';
import { ICRUDService } from '../../interfaces/ICRUDService';

@Component({
  selector: 'app-create-entities',
  imports: [DisplayErrorsComponent],
  templateUrl: './create-entities.component.html',
  styleUrl: './create-entities.component.css'
})
export class CreateEntitiesComponent<TDTO,TCreationDTO> implements AfterViewInit {

  CRUDService = inject(CURD_SERVICE_TOKEN) as ICRUDService<TDTO,TCreationDTO>
  router = inject(Router);
  errors : string[] = []

  @Input({required : true})
  indexRoute!: string

  @Input({required : true})
  title! : string

  @Input({required : true})
  formComponent : any

  @ViewChild('contentFrom',{read : ViewContainerRef})
  contentFrom!: ViewContainerRef
  
  private componentRef! : ComponentRef<any>

  ngAfterViewInit(): void {
    this.componentRef = this.contentFrom.createComponent(this.formComponent)
    this.componentRef.instance.postForm.subscribe((model : TCreationDTO) => {
      this.saveChanges(model)
    })
  }

  saveChanges(actor : TCreationDTO){
    this.CRUDService.create(actor).subscribe({
      next : () => {
        this.router.navigate([this.indexRoute])
      },
      error : err => {
        const errors = extractErrors(err)
        this.errors = errors
      }
    })
  }
}
