import { inject, Injectable } from '@angular/core';
import { GenreCreationDIO, GenreDIO } from './genres.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor() { }

  private http = inject(HttpClient)
  private baseURL = environment.apiURL + "/genres"

  public getAll() : Observable<GenreDIO[]>{
    return this.http.get<GenreDIO[]>(this.baseURL)
  }

  public create(genre : GenreCreationDIO){
    return this.http.post(this.baseURL,genre)
  }
}
