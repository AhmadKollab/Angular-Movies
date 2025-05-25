import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { GenreCreationDIO, GenreDIO } from '../genres.models';
import { GenresFormComponent } from "../genres-form/genres-form.component";
import { GenresService } from '../genres.service';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { Router } from '@angular/router';
import { extractErrors } from '../../shared/functions/extractErorrs';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";

@Component({
  selector: 'app-edit-genre',
  imports: [GenresFormComponent, LoadingComponent, DisplayErrorsComponent],
  templateUrl: './edit-genre.component.html',
  styleUrl: './edit-genre.component.css'
})
export class EditGenreComponent implements OnInit {
  GenreService = inject(GenresService)
  router = inject(Router)
  
  @Input({transform : numberAttribute})
  id! : number

  model?: GenreDIO

  errors : string[] = []

  ngOnInit(): void {
    this.GenreService.getGenreById(this.id).subscribe(genre => {
      this.model = genre
    })
  }

  saveChanges(genre : GenreCreationDIO){
    this.GenreService.update(this.id, genre).subscribe({
      next :() => {
        this.router.navigate(['/genres'])
      },
      error : err => {
        const error = extractErrors(err)
        this.errors = this.errors
      }
    })
  }

}
