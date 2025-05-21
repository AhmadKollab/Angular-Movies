import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { InputImgComponent } from '../../shared/components/input-img/input-img.component';
import { GenreDIO, GenreCreationDIO } from '../../genres/genres.models';
import { firstLetterShouldBeUpperCase, lastLetterShouldBeUpperCase } from '../../shared/functions/validations';
import { TheatersCreationDIO, TheatersDIO } from '../theaters.model';
import { MapComponent } from "../../shared/components/map/map.component";
import { Coordinate } from '../../shared/components/map/coordinate.mode';

@Component({
  selector: 'app-theaters-form',
  imports: [MatButtonModule, MatIconModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, RouterLink, MapComponent],
  templateUrl: './theaters-form.component.html',
  styleUrl: './theaters-form.component.css'
})
export class TheatersFormComponent {

  router = inject(Router);
  private formBuilder = inject(FormBuilder)

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required, firstLetterShouldBeUpperCase()] }],
    coordinate : new FormControl<Coordinate | null>(null, {validators :[Validators.required]})
  })

  @Input()
  model?: TheatersDIO;

  intialCoordinate : Coordinate[] = [];

  @Output()
  postForm = new EventEmitter<TheatersCreationDIO>();

  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
      const coordinate : Coordinate = {latitude: this.model.latitude, longitude: this.model.longitude};
      this.form.controls.coordinate.setValue(coordinate);
      this.intialCoordinate.push(coordinate);
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
    // if (field.hasError('lastLetterShouldBeUpperCase')) {
    //   return field.getError('lastLetterShouldBeUpperCase').message
    // }
    return ""
  }

  handleCoordinateSelection(coordinate : Coordinate){
    this.form.controls.coordinate.setValue(coordinate)
  }

  saveChanges() {
    // .. save changers
    const theater = this.form.value as TheatersCreationDIO
    theater.latitude = this.form.controls.coordinate.value?.latitude as number;
    theater.longitude = this.form.controls.coordinate.value?.longitude as number;
    this.postForm.emit(theater)
  }

}
