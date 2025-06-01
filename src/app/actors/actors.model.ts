export interface ActorsDIO {
    id : number;
    name : string;
    dateOfBirth  : Date;
    picture? : string
}

export interface ActorsCreationDIO {
    name : string;
    dateOfBirth : Date;
    picture? : File
}