import { Component, Input, numberAttribute } from '@angular/core';
import { GenreCreationDIO, GenreDIO } from '../genres.models';
import { GenresFormComponent } from "../genres-form/genres-form.component";

@Component({
  selector: 'app-edit-genre',
  imports: [GenresFormComponent],
  templateUrl: './edit-genre.component.html',
  styleUrl: './edit-genre.component.css'
})
export class EditGenreComponent {
  @Input({transform : numberAttribute})
  id! : number

  model: GenreDIO = {id : 1,name :"ActioN"}

  saveChanges(genre : GenreCreationDIO){
    //saveChanges
    console.log('editing the genre',genre)
  }

}
