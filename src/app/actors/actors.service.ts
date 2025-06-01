import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ActorsCreationDIO, ActorsDIO } from './actors.model';
import { PaginitionDTO } from '../shared/moduls/PagintionDTO';
import { Observable } from 'rxjs';
import { buildQueryParams } from '../shared/functions/buildQueryParams';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private http = inject(HttpClient)
  private baseURL = environment.apiURL + "/actors"

  constructor() { }

  public getPaginated(paginition : PaginitionDTO) : Observable<HttpResponse<ActorsDIO[]>> {
    let queryParams = buildQueryParams(paginition)
    return this.http.get<ActorsDIO[]>(this.baseURL, {params : queryParams , observe : 'response'})
  }

  public getActorById(id : number) : Observable<ActorsDIO> {
    return this.http.get<ActorsDIO>(`${this.baseURL}/${id}`)
  }

  public create(actor : ActorsCreationDIO) {
    const formDate = this.buildFormData(actor)
    return this.http.post(this.baseURL,formDate)
  }

  public update(id : number , actor : ActorsCreationDIO){
    const formData = this.buildFormData(actor)
    return this.http.put(`${this.baseURL}/${id}`,formData)
  }

  public delete (id : number){
    return this.http.delete(`${this.baseURL}/${id}`)
  }
private buildFormData (actor : ActorsCreationDIO) : FormData {
    const formData = new FormData()
    formData.append('name',actor.name)
    formData.append('dateOfBirth',actor.dateOfBirth.toISOString().split('T')[0])
    if(actor.picture){
      formData.append('picture',actor.picture)
    }
    return formData
  }
}
  
