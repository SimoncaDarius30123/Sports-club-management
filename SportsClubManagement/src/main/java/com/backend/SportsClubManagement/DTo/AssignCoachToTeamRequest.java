package com.backend.SportsClubManagement.DTo;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AssignCoachToTeamRequest {
    @NotBlank
    private String teamName;

    @NotBlank
    private String coachName;
}
