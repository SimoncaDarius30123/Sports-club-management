import { Sport } from "./sport.interface";

export interface Coach {
    id: number;
    name: string;
    email: string;
    sport:Sport;
}