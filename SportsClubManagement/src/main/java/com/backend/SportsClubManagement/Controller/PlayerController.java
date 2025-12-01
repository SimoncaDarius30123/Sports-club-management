package com.backend.SportsClubManagement.Controller;

import com.backend.SportsClubManagement.DTo.AssignPlayerToTeamRequest;
import com.backend.SportsClubManagement.DTo.UnassignPlayerFromTeamRequest;
import com.backend.SportsClubManagement.DTo.UpdatePlayerRequest;
import com.backend.SportsClubManagement.Entity.Player;
import com.backend.SportsClubManagement.Service.PlayerService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
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

    @GetMapping("/player/get-player-by-id")
    public Optional<Player> getPlayerById(@RequestParam Long playerId){
        return playerService.getPlayerById(playerId);
    }

    @GetMapping("/player/get-players-by-sport-id")
    public List<Player> getPlayersByTeamId(@RequestParam Long sportId){
        return playerService.getPlayersBySportId(sportId);
    }

    @DeleteMapping("/player/delete-by-id")
    public void deletePlayerById(@RequestParam Long playerId){
        playerService.deletePlayerById(playerId);
    }

    @PutMapping("/player/update-player")
    public void updatePlayer(@RequestBody UpdatePlayerRequest request){
        playerService.updatePlayer(request);
    }

    @PutMapping("/player/unassign-player")
    public void unassignPlayerFromTeam(@RequestBody UnassignPlayerFromTeamRequest request){
        playerService.unassignPlayerFromTeam(request.getPlayerName(), request.getSportId());
    }
}
