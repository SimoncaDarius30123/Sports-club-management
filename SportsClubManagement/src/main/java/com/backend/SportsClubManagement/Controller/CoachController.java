package com.backend.SportsClubManagement.Controller;

import com.backend.SportsClubManagement.Entity.Coach;
import com.backend.SportsClubManagement.Service.CoachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/coach")
public class CoachController {

    @Autowired
    private CoachService coachService;

    @PostMapping("/add-coach")
    public Coach addCoach(@RequestBody Coach coach) {
        return coachService.addCoach(coach);
    }

    @GetMapping("/get-all")
    public List<Coach> getCoaches(){
        return coachService.getCoaches();
    }
}
