package com.backend.SportsClubManagement.Service;

import com.backend.SportsClubManagement.DTo.AssignCoachToTeamRequest;
import com.backend.SportsClubManagement.DTo.GetTeamsWIthAveragePlayerAgeRequest;
import com.backend.SportsClubManagement.Entity.Coach;
import com.backend.SportsClubManagement.Entity.Team;
import com.backend.SportsClubManagement.Repository.CoachRepository;
import com.backend.SportsClubManagement.Repository.TeamRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private CoachRepository coachRepository;

    @Transactional
    public Team addTeam(Team team) {
        return teamRepository.save(team);
    }

    public Team assignCoachToTeam(AssignCoachToTeamRequest request) {
        Team team = teamRepository.findByName(request.getTeamName());
        Coach coach = coachRepository.findByName(request.getCoachName());
        team.setCoach(coach);
        return teamRepository.save(team);
    }

    public List<Team>  getAllTeams() {
        return teamRepository.findAll();
    }

    public List<GetTeamsWIthAveragePlayerAgeRequest> getTeamsWithAveragePlayerAge(Long sportId){
        return teamRepository.findTeamsWithAveragePlayerAge(sportId);
    }

    public List<Team> getTeamsBySportId(Long  sportId) {
        return  teamRepository.findBySportId(sportId);
    }
}
