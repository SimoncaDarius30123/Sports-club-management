package com.backend.SportsClubManagement.Service;

import com.backend.SportsClubManagement.Entity.Team;
import com.backend.SportsClubManagement.Repository.TeamRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;

    @Transactional
    public Team addTeam(Team team) {
        return teamRepository.save(team);
    }

    public List<Team>  getAllTeams() {
        return teamRepository.findAll();
    }
}
