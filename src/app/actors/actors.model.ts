export interface ActorsDIO {
    id : number;
    name : string;
    acotorDateOfBirth : Date;
    picture? : string
}

export interface ActorsCreationDIO {
    name : string;
    acotorDateOfBirth : Date;
    picture? : File
}