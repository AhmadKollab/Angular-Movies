import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { GenreCreationDIO, GenreDIO } from '../genres.models';
import { GenresFormComponent } from "../genres-form/genres-form.component";
import { GenresService } from '../genres.service';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { Router } from '@angular/router';
import { extractErrors } from '../../shared/functions/extractErorrs';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";
import { CURD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { EditEntitiesComponent } from "../../shared/components/edit-entities/edit-entities.component";

@Component({
  selector: 'app-edit-genre',
  imports: [GenresFormComponent, LoadingComponent, DisplayErrorsComponent, EditEntitiesComponent],
  templateUrl: './edit-genre.component.html',
  styleUrl: './edit-genre.component.css',
  providers : [
    {provide : CURD_SERVICE_TOKEN , useClass : GenresService}
  ]
})
export class EditGenreComponent{

  @Input({transform : numberAttribute})
  id! : number
  genresForm = GenresFormComponent
}
