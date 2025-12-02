package com.backend.SportsClubManagement.Service;

import com.backend.SportsClubManagement.DTo.AssignCoachToTeamRequest;
import com.backend.SportsClubManagement.DTo.GetTeamsWIthAveragePlayerAgeRequest;
import com.backend.SportsClubManagement.DTo.UpdateTeamRequest;
import com.backend.SportsClubManagement.Entity.Coach;
import com.backend.SportsClubManagement.Entity.Player;
import com.backend.SportsClubManagement.Entity.Team;
import com.backend.SportsClubManagement.Repository.CoachRepository;
import com.backend.SportsClubManagement.Repository.PlayerRepository;
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

    @Autowired
    private PlayerRepository playerRepository;

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

    public Team getTeamByCoachId(Long coachId) {
        return teamRepository.findByCoachId(coachId);
    }

    public List<Team> getTeamsWithNoCoach(Long sportId) {
        return teamRepository.findByCoachNullAndSportId(sportId);
    }

    public void deleteTeam(Team team) {
        List<Player> players = playerRepository.findByTeamId(team.getId());
        players.forEach(player -> {
            player.setTeam(null);
        });
        teamRepository.delete(team);
    }

    public void updateTeam(UpdateTeamRequest request){
        Team team = request.getTeam();
        if(request.getNewName() != null && !request.getNewName().isEmpty()){
            team.setName(request.getNewName());
        }
        if(request.getNewSport() != null){
            team.setSport(request.getNewSport());
        }
        teamRepository.save(team);
    }
}
