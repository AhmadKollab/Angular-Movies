import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ActorsCreationDIO } from '../actors.model';
import { ActorsFormComponent } from "../actors-form/actors-form.component";
import { ActorsService } from '../actors.service';
import { extractErrors } from '../../shared/functions/extractErorrs';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";
import { PaginitionDTO } from '../../shared/moduls/PagintionDTO';
import { CreateEntitiesComponent } from "../../shared/components/create-entities/create-entities.component";
import { CURD_SERVICE_TOKEN } from '../../shared/providers/providers';

@Component({
  selector: 'app-create-actor',
  imports: [MatButtonModule, ActorsFormComponent, DisplayErrorsComponent, CreateEntitiesComponent],
  templateUrl: './create-actor.component.html',
  styleUrl: './create-actor.component.css',
  providers : [
    {provide : CURD_SERVICE_TOKEN , useClass : ActorsService}
  ]
})
export class CreateActorComponent {
  actorsFrom = ActorsFormComponent
  
}
