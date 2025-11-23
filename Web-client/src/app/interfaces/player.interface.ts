import { Team } from "./team.interface";

export interface Player {
    id:number;
    name:string;
    position:string;
    age:number;
    team:Team;
    sport_id:number;
}