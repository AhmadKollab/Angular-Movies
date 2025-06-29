
import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { ActorsCreationDIO, ActorsDIO } from '../actors.model';
import { ActorsFormComponent } from "../actors-form/actors-form.component";
import { ActorsService } from '../actors.service';
import { Router } from '@angular/router';
import { extractErrors } from '../../shared/functions/extractErorrs';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";
import { CURD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { EditEntitiesComponent } from "../../shared/components/edit-entities/edit-entities.component";

@Component({
  selector: 'app-edit-actor',
  imports: [ActorsFormComponent, LoadingComponent, DisplayErrorsComponent, EditEntitiesComponent],
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css',
  providers : [
    {provide : CURD_SERVICE_TOKEN , useClass : ActorsService}
  ]
})
export class EditActorComponent{
  
  @Input({transform : numberAttribute})
  id! : number
  actorsForm = ActorsFormComponent
  
}
