import { Component, Input, numberAttribute } from '@angular/core';
import { TheatersCreationDIO, TheatersDIO } from '../theaters.model';
import { TheatersFormComponent } from "../theaters-form/theaters-form.component";

@Component({
  selector: 'app-edit-theater',
  imports: [TheatersFormComponent],
  templateUrl: './edit-theater.component.html',
  styleUrl: './edit-theater.component.css'
})
export class EditTheaterComponent {
  @Input({transform : numberAttribute})
    id! : number
  
    model: TheatersDIO = {id : 1,name :"Rasahad al shawa" ,latitude:31.520498983627203,longitude: 34.44287833193363}
  
    saveChanges(theater : TheatersCreationDIO){
      //saveChanges
      console.log('editing the theater',theater)
    }

}
