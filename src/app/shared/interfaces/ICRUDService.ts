import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { PaginitionDTO } from "../moduls/PagintionDTO";

export interface ICRUDService<TDTO,TCreationDTO> {
    getPaginated(paginition : PaginitionDTO) : Observable<HttpResponse<TDTO[]>>
    getById(id : number) : Observable<TDTO>
    create(entity : TCreationDTO):Observable<any>
    update(id : number , entity : TCreationDTO) : Observable<any>
    delete(id : number) : Observable<any>
}