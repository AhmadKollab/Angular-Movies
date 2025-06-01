import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { GenresService } from '../genres.service';
import { GenreCreationDIO, GenreDIO } from '../genres.models';
import { environment } from '../../../environments/environment.development';
import { MatTableModule } from '@angular/material/table';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PaginitionDTO } from '../../shared/moduls/PagintionDTO';
import { CURD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { IndexEntitiesComponent } from "../../shared/componets/index-entities/index-entities.component";

@Component({
  selector: 'app-index-genres',
  imports: [RouterLink, MatIconModule, MatButtonModule, MatTableModule, GenericListComponent, MatPaginatorModule, SweetAlert2Module, IndexEntitiesComponent],
  templateUrl: './index-genres.component.html',
  styleUrl: './index-genres.component.css',
  providers : [
    {provide : CURD_SERVICE_TOKEN , useClass : GenresService}
  ]
})
export class IndexGenresComponent {
  
}
