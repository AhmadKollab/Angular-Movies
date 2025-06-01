
import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { ActorsCreationDIO, ActorsDIO } from '../actors.model';
import { ActorsFormComponent } from "../actors-form/actors-form.component";
import { ActorsService } from '../actors.service';
import { Router } from '@angular/router';
import { extractErrors } from '../../shared/functions/extractErorrs';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";

@Component({
  selector: 'app-edit-actor',
  imports: [ActorsFormComponent, LoadingComponent, DisplayErrorsComponent],
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css'
})
export class EditActorComponent implements OnInit{
  
  @Input({transform : numberAttribute})
  id! : number
  actorsService = inject(ActorsService)
  router = inject(Router)
  model?: ActorsDIO
  errors : string[] = []

  ngOnInit(): void {
     this.actorsService.getActorById(this.id).subscribe(actor => {
      console.log("this is the actor :", actor)
      this.model = actor;
      console.log("this is the model",this.model)
      console.log("this is the type of date in model",typeof(this.model.dateOfBirth))
      console.log("this is the type of date in actor",typeof(actor.dateOfBirth))
  }
)
}

  saveChanges(actor : ActorsCreationDIO){
    this.actorsService.update(this.id,actor).subscribe({
      next : () => this.router.navigate(['/actors']),
      error : err =>{
        const errors = extractErrors(err)
        this.errors = errors
      }
    })
  }


}
