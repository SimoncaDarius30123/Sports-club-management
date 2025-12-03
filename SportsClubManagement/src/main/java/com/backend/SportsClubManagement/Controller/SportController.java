package com.backend.SportsClubManagement.Controller;

import com.backend.SportsClubManagement.DTo.UpdateSportRequest;
import com.backend.SportsClubManagement.Entity.Sport;
import com.backend.SportsClubManagement.Service.SportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/sport")
@CrossOrigin("*")
public class SportController {

    @Autowired
    private SportService sportService;


    @PostMapping("/add-sport")
    public Sport addSport(@RequestBody Sport sport) {
        return sportService.addSport(sport);
    }

    @GetMapping("/get-all-sports")
    public List<Sport> getAllSports() {
        return sportService.getAllSports();
    }

    @GetMapping("/get-sport")
    public Sport getSportByName(@RequestParam String sportName) {
        return sportService.getSportByName(sportName);
    }

    @DeleteMapping("/delete")
    public void deleteSport(@RequestParam Long sportId) {
        sportService.deleteSport(sportId);
    }

    @PutMapping("/update")
    public void updateSport(@RequestBody UpdateSportRequest request){
        sportService.updateSport(request);
    }

}
