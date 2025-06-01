import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, Router, Data } from '@angular/router';
import { dateOfBirthCannotBeInTheFutue, firstLetterShouldBeUpperCase, lastLetterShouldBeUpperCase } from '../../shared/functions/validations';
import { ActorsCreationDIO, ActorsDIO } from '../actors.model';
import { MatDatepickerModule } from '@angular/material/datepicker';
import moment from 'moment';
import { InputImgComponent } from "../../shared/components/input-img/input-img.component";

@Component({
  selector: 'app-actors-form',
  imports: [MatButtonModule, MatIconModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, RouterLink, MatDatepickerModule, InputImgComponent],
  templateUrl: './actors-form.component.html',
  styleUrl: './actors-form.component.css'
})
export class ActorsFormComponent implements OnInit{
  router = inject(Router);
  private formBuilder = inject(FormBuilder)

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required, firstLetterShouldBeUpperCase()] }],
    dateOfBirth : new FormControl<Date | null>(null ,{ validators: [Validators.required ,dateOfBirthCannotBeInTheFutue()]}),
    picture : new FormControl<null | File | string>(null)
  })

  @Input()
    model?: ActorsDIO;

  @Output()
  postForm = new EventEmitter<ActorsCreationDIO>();

  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }


  getErrorMassegeForDateOfBirth(): String {
    let field = this.form.controls.dateOfBirth 
    if (field.hasError('required')) {
      return "the date of birth field is required"
    }

    if(field.hasError('dateOfBirthCannotBeInTheFutue')){
      return field.getError('dateOfBirthCannotBeInTheFutue').message
    }
    
    return ""
  }

  getErrorMassegeForName(): String {
    let field = this.form.controls.name
    if (field.hasError('required')) {
      return "the name field is required"
    }
    if (field.hasError('firstLetterShouldBeUpperCase')) {
      return field.getError('firstLetterShouldBeUpperCase').message
    }
    return ""
  }

  handleFileSelection(file : File){
    this.form.controls.picture.setValue(file)
  }

  saveChanges(){
    const actor = this.form.value as ActorsCreationDIO

    if(actor.dateOfBirth){
      actor.dateOfBirth = moment(actor.dateOfBirth).toDate();
    }
    if(typeof actor.picture === 'string'){
      actor.picture = undefined
    }
    this.postForm.emit(actor)
  }
}