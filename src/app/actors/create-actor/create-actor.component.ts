import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ActorsCreationDIO } from '../actors.model';
import { ActorsFormComponent } from "../actors-form/actors-form.component";

@Component({
  selector: 'app-create-actor',
  imports: [MatButtonModule, ActorsFormComponent],
  templateUrl: './create-actor.component.html',
  styleUrl: './create-actor.component.css'
})
export class CreateActorComponent {
  router = inject(Router);

  saveChanges(actor : ActorsCreationDIO){
    // .. save changers
    console.log(actor)
    this.router.navigate(["/actors"])


  }

}
