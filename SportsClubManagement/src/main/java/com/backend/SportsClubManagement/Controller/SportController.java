package com.backend.SportsClubManagement.Controller;

import com.backend.SportsClubManagement.Entity.Sport;
import com.backend.SportsClubManagement.Service.SportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sport")
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

}
