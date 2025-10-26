package com.backend.SportsClubManagement.Controller;

import com.backend.SportsClubManagement.DTo.AssignPlayerToTeamRequest;
import com.backend.SportsClubManagement.Entity.Player;
import com.backend.SportsClubManagement.Service.PlayerService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @PostMapping("/player/add-player")
    public Player addPlayer(@RequestBody Player player) {
        return playerService.addPlayer(player);
    }

    @GetMapping("/player/get-all")
    public List<Player> listPlayers(){
        return playerService.listPlayers();
    }

    @PutMapping("/player/assign-to-team")
    public Player assignPlayerToTeam(@Valid @RequestBody AssignPlayerToTeamRequest request){
        return playerService.assignPlayerToTeam(request);
    }

    @GetMapping("/player/get-players-per-coach")
    public List<Player> getPlayersPerCoach(@RequestParam Long coachId){
        return playerService.getPlayersPerCoach(coachId);
    }
}
