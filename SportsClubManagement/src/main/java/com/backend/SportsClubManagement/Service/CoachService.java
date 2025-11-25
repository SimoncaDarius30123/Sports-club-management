package com.backend.SportsClubManagement.Service;

import com.backend.SportsClubManagement.DTo.UpdateCoachRequest;
import com.backend.SportsClubManagement.Entity.Coach;
import com.backend.SportsClubManagement.Entity.Team;
import com.backend.SportsClubManagement.Repository.CoachRepository;
import com.backend.SportsClubManagement.Repository.TeamRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CoachService {

    @Autowired
    private CoachRepository coachRepository;

    @Autowired
    private TeamRepository  teamRepository;

    @Transactional
    public Coach addCoach(Coach coach) {
        return coachRepository.save(coach);
    }

    public List<Coach> getCoaches(){
        return coachRepository.findAll();
    }

    public List<Coach> getCoachesBySportId(Long sportId){
        return  coachRepository.findBySportId(sportId);
    }

    @Transactional
    public void deleteCoach(Long id){
       Team team = teamRepository.findByCoachId(id);
       if(team != null){
           team.setCoach(null);
           teamRepository.save(team);
       }
       coachRepository.deleteById(id);
    }

    public void updateCoach(UpdateCoachRequest request){
        Coach coach = request.getCoach();
        if(request.getNewName() != null && !request.getNewName().isEmpty()){
            coach.setName(request.getNewName());
        }
        if(request.getNewEmail() != null && !request.getNewEmail().isEmpty()){
            coach.setEmail(request.getNewEmail());
        }
        if(request.getNewSport() != null){
            coach.setSport(request.getNewSport());
        }
        coachRepository.save(coach);
    }

}
