import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TheatersCreationDIO } from '../theaters.model';
import { GenresFormComponent } from "../../genres/genres-form/genres-form.component";
import { TheatersFormComponent } from "../theaters-form/theaters-form.component";

@Component({
  selector: 'app-create-theater',
  imports: [MatButtonModule, TheatersFormComponent],
  templateUrl: './create-theater.component.html',
  styleUrl: './create-theater.component.css'
})
export class CreateTheaterComponent {
  router = inject(Router);
    
    saveChanges(theater : TheatersCreationDIO){
      // .. save changers
      console.log(theater);
      this.router.navigate(["/theaters"]);
    }

}
