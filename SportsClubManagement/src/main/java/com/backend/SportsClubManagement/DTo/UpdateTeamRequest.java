package com.backend.SportsClubManagement.DTo;

import com.backend.SportsClubManagement.Entity.Sport;
import com.backend.SportsClubManagement.Entity.Team;
import lombok.Data;

@Data
public class UpdateTeamRequest {
    private Team team;
    private String newName;
    private Sport newSport;
}
