package com.backend.SportsClubManagement.Service;

import com.backend.SportsClubManagement.DTo.AssignPlayerToTeamRequest;
import com.backend.SportsClubManagement.Entity.Player;
import com.backend.SportsClubManagement.Entity.Team;
import com.backend.SportsClubManagement.Repository.PlayerRepository;
import com.backend.SportsClubManagement.Repository.TeamRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private TeamRepository teamRepository;


    @Transactional
    public Player addPlayer(Player player) {
        return playerRepository.save(player);
    }

    public List<Player> listPlayers(){
        return playerRepository.findAll();
    }

    @Transactional
    public Player assignPlayerToTeam(AssignPlayerToTeamRequest request){
        Player player = playerRepository.findByName(request.getPlayerName());
        Team team = teamRepository.findByNameAndSportId(request.getTeamName(),request.getSportId());
        player.setTeam(team);
        return playerRepository.save(player);
    }

    public List<Player> getPlayersPerCoach(Long coachId){
        return playerRepository.findByCoachId(coachId);
    }

}
