package com.backend.SportsClubManagement.Service;

import com.backend.SportsClubManagement.DTo.UpdateSportRequest;
import com.backend.SportsClubManagement.Entity.Sport;
import com.backend.SportsClubManagement.Repository.SportRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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


    public void deleteSport(Long sportId) {
        sportRepository.deleteById(sportId);
    }

    public void updateSport(UpdateSportRequest request) {
        Sport sport = request.getSport();
        if(request.getNewName()!= null && !request.getNewName().isEmpty()){
            sport.setName(request.getNewName());
        }
        sportRepository.save(sport);
    }
}
