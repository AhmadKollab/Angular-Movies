import { Component, Input, numberAttribute } from '@angular/core';
import { TheatersCreationDIO, TheatersDIO } from '../theaters.model';
import { TheatersFormComponent } from "../theaters-form/theaters-form.component";
import { CURD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { TheatersService } from '../theaters.service';
import { EditEntitiesComponent } from "../../shared/components/edit-entities/edit-entities.component";

@Component({
  selector: 'app-edit-theater',
  imports: [TheatersFormComponent, EditEntitiesComponent],
  templateUrl: './edit-theater.component.html',
  styleUrl: './edit-theater.component.css',
  providers : [
    {provide : CURD_SERVICE_TOKEN , useClass : TheatersService}
  ]
})
export class EditTheaterComponent {
  @Input({transform : numberAttribute})
    id! : number
    theatersForm = TheatersFormComponent

}
