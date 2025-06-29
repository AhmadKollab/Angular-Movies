import { Component, inject, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { GenericListComponent } from '../generic-list/generic-list.component';
import { CURD_SERVICE_TOKEN } from '../../providers/providers';
import { PaginitionDTO } from '../../moduls/PagintionDTO';
import { HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ICRUDService } from '../../interfaces/ICRUDService';

@Component({
  selector: 'app-index-entities',
  imports: [RouterLink, MatIconModule, MatButtonModule, MatTableModule, GenericListComponent,MatPaginatorModule,SweetAlert2Module,CommonModule],
  templateUrl: './index-entities.component.html',
  styleUrl: './index-entities.component.css'
})
export class IndexEntitiesComponent<TDTO, TCreationDTO> {
  CRUDService = inject(CURD_SERVICE_TOKEN) as ICRUDService<TDTO,TCreationDTO>
  entities! : TDTO[]

  paginition : PaginitionDTO = {page : 1 , recordsPerPage : 5}
  totalRecordsCount! : number
  @Input()
  columnsToDisplay = ["id" , "name" , "actions"]
  @Input({required : true})
  title! : string
  @Input({required : true})
  createRoute! : string
  @Input({required : true})
  editRoute! : string
console: any;

  constructor(){
    this.loadRecords()
  }

  loadRecords (){
    this.CRUDService.getPaginated(this.paginition).subscribe((response : HttpResponse<TDTO[]>) => {
      this.entities = response.body as TDTO[]
      const header = response.headers.get("total-records-count") as string
      this.totalRecordsCount = parseInt(header,10)
    })
  }

  updatePaginition(data : PageEvent){
    this.paginition = {page : data.pageIndex+1 ,recordsPerPage : data.pageSize }
    this.loadRecords()
  }

  delete(id : number ) {
    this.CRUDService.delete(id).subscribe(() => {
      this.paginition.page = 1
      this.loadRecords()
    })
  }
  firstLetterToUppercase (value : string) {
    if(!value) return value

    return value.charAt(0).toUpperCase() + value.slice(1)
  }

}
