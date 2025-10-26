package com.backend.SportsClubManagement.DTo;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class AssignPlayerToTeamRequest {

    @NotBlank
    private String playerName;

    @NotBlank
    private String teamName;

    @NotNull
    private Long sportId;
}
