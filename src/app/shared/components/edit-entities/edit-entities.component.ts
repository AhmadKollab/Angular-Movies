import { Component, ComponentRef, inject, Input, numberAttribute, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CURD_SERVICE_TOKEN } from '../../providers/providers';
import { ICRUDService } from '../../interfaces/ICRUDService';
import { Router } from '@angular/router';
import { extractErrors } from '../../functions/extractErorrs';
import { LoadingComponent } from "../loading/loading.component";
import { DisplayErrorsComponent } from "../display-errors/display-errors.component";

@Component({
  selector: 'app-edit-entities',
  imports: [LoadingComponent, DisplayErrorsComponent],
  templateUrl: './edit-entities.component.html',
  styleUrl: './edit-entities.component.css'
})
export class EditEntitiesComponent<TDTO,TCreationDTO> implements OnInit{

  loading: boolean = true;
  errors: string[] = [];
  CRUDService = inject(CURD_SERVICE_TOKEN) as ICRUDService<TDTO, TCreationDTO>;
  router = inject(Router);

  @Input({required: true})
  id!: number;

  @Input({required:true})
  title!: string;

  @Input({required: true})
  formComponent: any;

  @Input({required: true})
  indexRoute!: string;

  @ViewChild("contentForm", {read: ViewContainerRef})
  contentForm!: ViewContainerRef;
  private componentRef!: ComponentRef<any>;

  ngOnInit(): void {
    this.CRUDService.getById(this.id).subscribe(model => {
    this.loadComponent(model);
    });
  }

  loadComponent(model: any){
    if (this.contentForm){
      this.componentRef = this.contentForm.createComponent(this.formComponent);
      this.componentRef.instance.model = model;
      this.componentRef.instance.postForm.subscribe((model: TCreationDTO) => {
        this.saveChanges(model);
      });

      this.loading = false;
    }
  }

  saveChanges(entity: TCreationDTO){
    this.CRUDService.update(this.id, entity).subscribe({
      next: () => {
        this.router.navigate([this.indexRoute]);
      },
      error: err => {
        const errors = extractErrors(err);
        this.errors = errors;
      }
    })
  }
}
