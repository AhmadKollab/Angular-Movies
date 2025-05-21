import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Data, Router, RouterLink } from '@angular/router';
import { firstLetterShouldBeUpperCase, lastLetterShouldBeUpperCase } from '../../shared/functions/validations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { GenreCreationDIO, GenreDIO } from '../genres.models';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";

@Component({
  selector: 'app-genres-form',
  imports: [MatButtonModule, MatIconModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, RouterLink, DisplayErrorsComponent],
  templateUrl: './genres-form.component.html',
  styleUrl: './genres-form.component.css'
})
export class GenresFormComponent implements OnInit {

  router = inject(Router);
  private formBuilder = inject(FormBuilder)

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required, firstLetterShouldBeUpperCase(),Validators.maxLength(18)] }],
  })

  @Input()
  model?: GenreDIO;

  @Output()
  postForm = new EventEmitter<GenreCreationDIO>();

  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }


  getErrorMassegeForName(): String {
    let field = this.form.controls.name
    if (field.hasError('required')) {
      return "the name field is required"
    }
    if (field.hasError('firstLetterShouldBeUpperCase')) {
      return field.getError('firstLetterShouldBeUpperCase').message
    }
    if (field.hasError('maxlength')) {
      return "the max lenght must be 18"
    }
    return ""
  }

  saveChanges() {
    // .. save changers
    this.postForm.emit(this.form.value as GenreCreationDIO)
  }
}


