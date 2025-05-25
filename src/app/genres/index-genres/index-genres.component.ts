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

@Component({
  selector: 'app-index-genres',
  imports: [RouterLink, MatIconModule, MatButtonModule, MatTableModule, GenericListComponent,MatPaginatorModule,SweetAlert2Module],
  templateUrl: './index-genres.component.html',
  styleUrl: './index-genres.component.css'
})
export class IndexGenresComponent {
  genresService = inject(GenresService)
  genres! : GenreDIO[]
  columnsToDisplay = ["id" , "name" , "actions"]
  paginition : PaginitionDTO = {page : 1 , recordsPerPage : 5}
  totalRecordsCount! : number

  constructor(){
    this.loadRecords()
  }

  loadRecords (){
    this.genresService.getPaginated(this.paginition).subscribe((response : HttpResponse<GenreDIO[]>) => {
      this.genres = response.body as GenreDIO[]
      const header = response.headers.get("total-records-count") as string
      this.totalRecordsCount = parseInt(header,10)
    })
  }

  updatePaginition(data : PageEvent){
    this.paginition = {page : data.pageIndex+1 ,recordsPerPage : data.pageSize }
    this.loadRecords()
  }

  delete(id : number ) {
    this.genresService.delete(id).subscribe(() => {
      this.loadRecords()
    })
  }

}
