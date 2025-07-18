import { inject, Injectable } from '@angular/core';
import { ICRUDService } from '../shared/interfaces/ICRUDService';
import { TheatersCreationDIO, TheatersDIO } from './theaters.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginitionDTO } from '../shared/moduls/PagintionDTO';
import { buildQueryParams } from '../shared/functions/buildQueryParams';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TheatersService implements ICRUDService<TheatersDIO,TheatersCreationDIO> {

  constructor () {}

  private http = inject(HttpClient)
  private baseURL = environment.apiURL + '/theaters'


  getPaginated(paginition: PaginitionDTO): Observable<HttpResponse<TheatersDIO[]>> {
    let queryParams = buildQueryParams(paginition)
    return this.http.get<TheatersDIO[]>(this.baseURL, {params : queryParams , observe : 'response' })
  }
  getById(id: number): Observable<TheatersDIO> {
    return this.http.get<TheatersDIO>(`${this.baseURL}/${id}`)
  }
  create(entity: TheatersCreationDIO): Observable<any> {
    return this.http.post(this.baseURL , entity)
  }
  update(id: number, entity: TheatersCreationDIO): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, entity)
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`)
  }

}
