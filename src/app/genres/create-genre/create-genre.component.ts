import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { firstLetterShouldBeUpperCase, lastLetterShouldBeUpperCase } from '../../shared/functions/validations';
import { GenreCreationDIO } from '../genres.models';
import { GenresFormComponent } from "../genres-form/genres-form.component";
import { GenresService } from '../genres.service';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";
import { extractErrors } from '../../shared/functions/extractErorrs';
import { CURD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { CreateEntitiesComponent } from "../../shared/components/create-entities/create-entities.component";

@Component({
  selector: 'app-create-genre',
  imports: [GenresFormComponent, DisplayErrorsComponent, CreateEntitiesComponent],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css',
  providers : [
    {provide : CURD_SERVICE_TOKEN , useClass : GenresService}
  ]
})
export class CreateGenreComponent {
  genreForm = GenresFormComponent
}
