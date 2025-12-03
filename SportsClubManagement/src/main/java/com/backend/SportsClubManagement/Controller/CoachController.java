package com.backend.SportsClubManagement.Controller;

import com.backend.SportsClubManagement.DTo.UnassignCoachFromTeamRequest;
import com.backend.SportsClubManagement.DTo.UpdateCoachRequest;
import com.backend.SportsClubManagement.Entity.Coach;
import com.backend.SportsClubManagement.Service.CoachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/coach")
@CrossOrigin
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

    @GetMapping("/get-coaches-by-sport-id")
    public List<Coach> getCoachesBySportId(@RequestParam Long sportId){
        return coachService.getCoachesBySportId(sportId);
    }

    @DeleteMapping("/delete")
    public void deleteCoach(@RequestParam Long id){
        coachService.deleteCoach(id);
    }

    @PutMapping("/update")
    public void updateCoach(@RequestBody UpdateCoachRequest request){
        coachService.updateCoach(request);
    }

    @PutMapping("/unassign")
    public void unassignCoach(@RequestBody UnassignCoachFromTeamRequest request){
        coachService.unassignCoachFromTeam(request.getCoachName(),  request.getSportId());
    }
}
