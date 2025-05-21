import { Component, Input, numberAttribute } from '@angular/core';
import { ActorsCreationDIO, ActorsDIO } from '../actors.model';
import { ActorsFormComponent } from "../actors-form/actors-form.component";

@Component({
  selector: 'app-edit-actor',
  imports: [ActorsFormComponent],
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css'
})
export class EditActorComponent {
  @Input({transform : numberAttribute})
  id! : number

  model: ActorsDIO = {id : 1,name :"Cillian murvephe",acotorDateOfBirth: new Date('1948-05-25'), picture : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/330px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg'};

  saveChanges(actor : ActorsCreationDIO){
    //saveChanges
    console.log('editing the actor',actor)
    
  }


}
