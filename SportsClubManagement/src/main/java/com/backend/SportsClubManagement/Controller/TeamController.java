package com.backend.SportsClubManagement.Controller;

import com.backend.SportsClubManagement.Entity.Team;
import com.backend.SportsClubManagement.Service.TeamService;
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
}
