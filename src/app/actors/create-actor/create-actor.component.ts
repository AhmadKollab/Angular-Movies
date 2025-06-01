import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ActorsCreationDIO } from '../actors.model';
import { ActorsFormComponent } from "../actors-form/actors-form.component";
import { ActorsService } from '../actors.service';
import { extractErrors } from '../../shared/functions/extractErorrs';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";
import { PaginitionDTO } from '../../shared/moduls/PagintionDTO';

@Component({
  selector: 'app-create-actor',
  imports: [MatButtonModule, ActorsFormComponent, DisplayErrorsComponent],
  templateUrl: './create-actor.component.html',
  styleUrl: './create-actor.component.css'
})
export class CreateActorComponent {
  router = inject(Router);
  actorsServie = inject(ActorsService)
  errors : string[] = []
  


  saveChanges(actor : ActorsCreationDIO){
    this.actorsServie.create(actor).subscribe({
      next : () => {
        this.router.navigate(["/actors"])
      },
      error : err => {
        const errors = extractErrors(err)
        this.errors = errors
      }
    })

  }

}
