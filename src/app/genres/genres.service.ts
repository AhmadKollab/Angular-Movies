import { inject, Injectable } from '@angular/core';
import { GenreCreationDIO, GenreDIO } from './genres.models';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { buildQueryParams } from '../shared/functions/buildQueryParams';
import { PaginitionDTO } from '../shared/moduls/PagintionDTO';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor() { }

  private http = inject(HttpClient)
  private baseURL = environment.apiURL + "/genres"

  public getPaginated(paginition : PaginitionDTO) : Observable<HttpResponse<GenreDIO[]>>{
    let qureyParams = buildQueryParams(paginition)
    return this.http.get<GenreDIO[]>(this.baseURL, {params : qureyParams, observe : 'response'})
  }

  public getGenreById(id : number) : Observable<GenreDIO> {
    return this.http.get<GenreDIO>(`${this.baseURL}/${id}`)
  }

  public create(genre : GenreCreationDIO){
    return this.http.post(this.baseURL,genre)
  }

  public update(id : number , genre : GenreCreationDIO){
    return this.http.put(`${this.baseURL}/${id}` , genre)
  }

  public delete(id : number){
    return this.http.delete(`${this.baseURL}/${id}`)
  }
}
