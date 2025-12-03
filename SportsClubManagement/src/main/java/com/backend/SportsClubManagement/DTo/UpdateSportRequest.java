package com.backend.SportsClubManagement.DTo;

import com.backend.SportsClubManagement.Entity.Sport;
import lombok.Data;

@Data
public class UpdateSportRequest {
    private Sport sport;
    private String newName;
}
