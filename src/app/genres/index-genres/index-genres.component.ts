import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { GenresService } from '../genres.service';
import { GenreCreationDIO, GenreDIO } from '../genres.models';
import { environment } from '../../../environments/environment.development';
import { MatTableModule } from '@angular/material/table';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";

@Component({
  selector: 'app-index-genres',
  imports: [RouterLink, MatIconModule, MatButtonModule, MatTableModule, GenericListComponent],
  templateUrl: './index-genres.component.html',
  styleUrl: './index-genres.component.css'
})
export class IndexGenresComponent {
  genresService = inject(GenresService)
  genres! : GenreDIO[]
  columnsToDisplay = ["id" , "name" , "actions"]

  constructor(){
    this.genresService.getAll().subscribe(g => {
      this.genres = g
    })
  }

}
