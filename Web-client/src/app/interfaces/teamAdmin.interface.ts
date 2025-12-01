import { Coach } from "./coach.interface";
import { Sport } from "./sport.interface";

export interface TeamAdmin{
    id:number;
    name:string;
    coach:Coach;
    sport:Sport;
}