import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MoviesCreationDTO } from '../movies-form/movies.moduls';
import { MoviesFormComponent } from "../movies-form/movies-form.component";
import { MultipleSelectorDTO } from '../../shared/components/multiple-slector/MultipleSelectorDTO';

@Component({
  selector: 'app-create-movie',
  imports: [MatButtonModule, MoviesFormComponent],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent {
  router = inject(Router);

  nonSelectedGenres: MultipleSelectorDTO[] = [
    { key: 1, description: 'fantsy' },
    { key: 2, description: 'action' },
    { key: 3, description: 'comedy' },
  ]

  selectedGenres: MultipleSelectorDTO[] = []

  nonSelectedTheater : MultipleSelectorDTO[] = [
    {key : 1, description : 'rashad al shawa'},
    {key : 2, description : 'al qatan'},
    {key : 3, description : 'RCPS'},]

  selectedTheater : MultipleSelectorDTO[] = []

  saveChanges(movie: MoviesCreationDTO) {
    console.log('Creating the movie ,', movie)
  }

}
