package com.backend.SportsClubManagement.DTo;

import lombok.Data;

@Data
public class UnassignCoachFromTeamRequest {

    private String coachName;
    private Long sportId;
}
