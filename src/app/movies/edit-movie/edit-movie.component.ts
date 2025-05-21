import { Component, Input, numberAttribute } from '@angular/core';
import { popResultSelector } from 'rxjs/internal/util/args';
import { MoviesCreationDTO, MoviesDTO } from '../movies-form/movies.moduls';
import { MoviesFormComponent } from "../movies-form/movies-form.component";
import { MultipleSelectorDTO } from '../../shared/components/multiple-slector/MultipleSelectorDTO';

@Component({
  selector: 'app-edit-movie',
  imports: [MoviesFormComponent],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {
  @Input({transform : numberAttribute})
  id! : number

  selectedGenres : MultipleSelectorDTO[] = [
    { key: 1, description: 'fantsy' },
    { key: 2, description: 'action' },]

  nonSelectedGenres : MultipleSelectorDTO[] = [{ key: 3, description: 'comedy' }]  

  selectedTheater : MultipleSelectorDTO[] = [
    {key : 1, description : 'rashad al shawa'},
    {key : 2, description : 'al qatan'},]

  nonSelectedTheaters : MultipleSelectorDTO[] = [{key : 3, description : 'RCPS'},]

  model : MoviesDTO = {id:1 , title:"Spider-man",releaseDate:new Date('2022-05-22'),trailer:'abcd',poster : 'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg'}
  
  saveChanges(movie : MoviesCreationDTO){
    console.log('editing the movie', movie)
  }
}
