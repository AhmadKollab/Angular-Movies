import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MoviesCreationDTO, MoviesDTO } from './movies.moduls';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import moment from 'moment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InputImgComponent } from '../../shared/components/input-img/input-img.component';
import { MultipleSlectorComponent } from "../../shared/components/multiple-slector/multiple-slector.component";
import { MultipleSelectorDTO } from '../../shared/components/multiple-slector/MultipleSelectorDTO';

@Component({
  selector: 'app-movies-form',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MatDatepickerModule, InputImgComponent, MultipleSlectorComponent],
  templateUrl: './movies-form.component.html',
  styleUrl: './movies-form.component.css'
})
export class MoviesFormComponent implements OnInit {
  @Input({required : true})
  selectedGenres!:MultipleSelectorDTO[]

  @Input({required : true})
  nonSelectedGenres!:MultipleSelectorDTO[]

  @Input({required : true})
  selectedTheaters! : MultipleSelectorDTO[]

  @Input({required : true})
  nonSelectedTheaters! : MultipleSelectorDTO[]
  

  @Input()
  model?:MoviesDTO

  @Output()
  postForm = new EventEmitter<MoviesCreationDTO>()

  private formBuilder = inject(FormBuilder)

  form = this.formBuilder.group({
    title : ['',{validators : [Validators.required]}],
    releaseDate : new FormControl<Date | null>(null),
    trailer :  '',
    poster : new FormControl<File | string | null>(null)
  })

  ngOnInit(): void {
    if(this.model !== undefined) {
      this.form.patchValue(this.model)
    }
  }
  handleFileSelection(file : File){
    this.form.controls.poster.setValue(file)
  }

  getErrorMassegesForTitle(){
    const field = this.form.controls.title;
    if(field.hasError('required')){
      return "the title is required"
    }
    return "";
  }
  saveChanges(){
    const movie = this.form.value as MoviesCreationDTO

    if(movie.releaseDate){
      movie.releaseDate = moment(movie.releaseDate).toDate();
    }
    if(typeof movie.poster === 'string'){
      movie.poster = undefined
    }

    const genresIds = this.selectedGenres.map(val => val.key)
    movie.genresIds = genresIds

    const theaterIds = this.selectedTheaters.map(val => val.key)
    movie.theatersIds = theaterIds
    this.postForm.emit(movie)
  }
}
