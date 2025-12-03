import { Sport } from "./sport.interface";
import { Team } from "./team.interface";

export interface PlayerAdmin {
    id:number;
    name:string;
    position:string;
    age:number;
    team:Team;
    sport:Sport;
}