package com.backend.SportsClubManagement.Service;

import com.backend.SportsClubManagement.Entity.Sport;
import com.backend.SportsClubManagement.Repository.SportRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SportService {

    @Autowired
    private SportRepository sportRepository;

    @Transactional
    public Sport addSport(Sport sport) {
        return sportRepository.save(sport);
    }


    public List<Sport> getAllSports() {
        return sportRepository.findAll();
    }


    public Sport getSportByName(String sportName) {
        return sportRepository.findByName(sportName);
    }
}
