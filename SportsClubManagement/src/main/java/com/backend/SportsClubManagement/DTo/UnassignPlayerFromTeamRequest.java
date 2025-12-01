package com.backend.SportsClubManagement.DTo;

import lombok.Data;

@Data
public class UnassignPlayerFromTeamRequest {
    private String playerName;
    private Long sportId;
}
