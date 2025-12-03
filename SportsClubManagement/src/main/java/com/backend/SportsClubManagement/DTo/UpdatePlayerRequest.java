package com.backend.SportsClubManagement.DTo;

import com.backend.SportsClubManagement.Entity.Player;
import com.backend.SportsClubManagement.Entity.Sport;
import lombok.Data;

@Data
public class UpdatePlayerRequest {
    private Player player;
    private String newName;
    private String newPosition;
    private int newAge;
    private Sport sport;

}
