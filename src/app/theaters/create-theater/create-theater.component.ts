import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TheatersCreationDIO } from '../theaters.model';
import { GenresFormComponent } from "../../genres/genres-form/genres-form.component";
import { TheatersFormComponent } from "../theaters-form/theaters-form.component";
import { CURD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { TheatersService } from '../theaters.service';
import { CreateEntitiesComponent } from "../../shared/components/create-entities/create-entities.component";

@Component({
  selector: 'app-create-theater',
  imports: [MatButtonModule, TheatersFormComponent, CreateEntitiesComponent],
  templateUrl: './create-theater.component.html',
  styleUrl: './create-theater.component.css',
  providers : [
    {provide : CURD_SERVICE_TOKEN , useClass : TheatersService}
  ]
})
export class CreateTheaterComponent {
  theatersForm = TheatersFormComponent
}
