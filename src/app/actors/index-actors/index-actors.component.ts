import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ActorsService } from '../actors.service';
import { ActorsDIO } from '../actors.model';
import { PaginitionDTO } from '../../shared/moduls/PagintionDTO';
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { GenericListComponent } from '../../shared/components/generic-list/generic-list.component';
import { CommonModule } from '@angular/common';
import { CURD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { IndexEntitiesComponent } from "../../shared/componets/index-entities/index-entities.component";

@Component({
  selector: 'app-index-actors',
  imports: [MatButtonModule, MatIconModule, RouterLink, MatTableModule, GenericListComponent, MatPaginatorModule, SweetAlert2Module, CommonModule, IndexEntitiesComponent],
  templateUrl: './index-actors.component.html',
  styleUrl: './index-actors.component.css',
  providers : [
      {provide : CURD_SERVICE_TOKEN , useClass : ActorsService}
    ]
})
export class IndexActorsComponent {
  columnsToDisplay = ["id" , "name","picture", "actions"]
 
}
