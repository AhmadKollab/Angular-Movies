import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ActorsCreationDIO } from './actors.model';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private http = inject(HttpClient)
  private baseURL = environment.apiURL + "/acotrs"

  constructor() { }

  public create(actor : ActorsCreationDIO) {
    const formDate = this.buildFormData(actor)
    return this.http.post(this.baseURL,actor)
  }

  private buildFormData (actor : ActorsCreationDIO) : FormData {
    const formData = new FormData()
    formData.append('name',actor.name)
    formData.append('date of birth',actor.acotorDateOfBirth.toISOString().split('T')[0])
    if(actor.picture){
      formData.append('picture',actor.picture)
    }
    return formData
  }
}
