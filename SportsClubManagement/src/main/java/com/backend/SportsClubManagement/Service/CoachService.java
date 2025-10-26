package com.backend.SportsClubManagement.Service;

import com.backend.SportsClubManagement.Entity.Coach;
import com.backend.SportsClubManagement.Repository.CoachRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CoachService {

    @Autowired
    private CoachRepository coachRepository;

    @Transactional
    public Coach addCoach(Coach coach) {
        return coachRepository.save(coach);
    }

    public List<Coach> getCoaches(){
        return coachRepository.findAll();
    }
}
