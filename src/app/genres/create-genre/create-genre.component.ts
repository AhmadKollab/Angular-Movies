import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { firstLetterShouldBeUpperCase, lastLetterShouldBeUpperCase } from '../../shared/functions/validations';
import { GenreCreationDIO } from '../genres.models';
import { GenresFormComponent } from "../genres-form/genres-form.component";
import { GenresService } from '../genres.service';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";
import { extractErrors } from '../../shared/functions/extractErorrs';

@Component({
  selector: 'app-create-genre',
  imports: [GenresFormComponent, DisplayErrorsComponent],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {
  router = inject(Router);
  GenresService = inject(GenresService)
  errors : string[] = []
  
  saveChanges(genre : GenreCreationDIO){
    // .. save changers
    console.log(genre)
    this.GenresService.create(genre).subscribe({
      next : () =>{

      this.router.navigate(["/genres"]);
    },
    error : err => {
      const errors = extractErrors(err)
      this.errors = errors
      console.log(err)
    }
  })
    
  }

}
