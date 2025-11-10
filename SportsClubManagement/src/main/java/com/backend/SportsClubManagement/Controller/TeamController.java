package com.backend.SportsClubManagement.Controller;

import com.backend.SportsClubManagement.DTo.AssignCoachToTeamRequest;
import com.backend.SportsClubManagement.DTo.GetTeamsWIthAveragePlayerAgeRequest;
import com.backend.SportsClubManagement.Entity.Team;
import com.backend.SportsClubManagement.Service.TeamService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/team")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @PostMapping("/add-team")
    public Team addTeam(@RequestBody Team team) {
        return teamService.addTeam(team);
    }

    @GetMapping("/get-all-teams")
    public List<Team> getTeams() {
        return teamService.getAllTeams();
    }

    @PutMapping("/assign-coach-to-team")
    public Team assignCoachToTeam(@Valid @RequestBody AssignCoachToTeamRequest assignCoachToTeamRequest) {
        return teamService.assignCoachToTeam(assignCoachToTeamRequest);
    }

    @GetMapping("/get-teams-with-average-player-age")
    public List<GetTeamsWIthAveragePlayerAgeRequest> getTeamsWithAveragePlayerAge(@RequestParam Long sportId) {
        return teamService.getTeamsWithAveragePlayerAge(sportId);
    }

    @GetMapping("/get-teams-by-sport-id")
    public List<Team> getTeamsBySportId(@RequestParam Long sportId) {
        return teamService.getTeamsBySportId(sportId);
    }
}
