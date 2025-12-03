package com.backend.SportsClubManagement.DTo;

import com.backend.SportsClubManagement.Entity.Coach;
import com.backend.SportsClubManagement.Entity.Sport;
import lombok.Data;

@Data
public class UpdateCoachRequest {
    private Coach coach;
    private String newName;
    private String newEmail;
    private Sport newSport;
}
