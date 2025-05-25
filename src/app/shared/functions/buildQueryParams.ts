import { HttpParams } from "@angular/common/http";

export function buildQueryParams(obj : any) : HttpParams {
    let qureyParams = new HttpParams()

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            qureyParams = qureyParams.append(key , obj[key])
        }
    }
    return qureyParams
}