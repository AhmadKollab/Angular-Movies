import { ActorAutoCompleteDTO } from "../../actors/actors.model"

export interface MoviesDTO {
    id : number
    title : string
    releaseDate : Date
    trailer : string
    poster? : string
    genresIds? : number[];
    theatersIds? : number[];
}

export interface MoviesCreationDTO {
    title : string
    releaseDate : Date
    trailer : string
    poster? : File
    genresIds? : number[];
    theatersIds? : number[];
    actors?: ActorAutoCompleteDTO[];
}