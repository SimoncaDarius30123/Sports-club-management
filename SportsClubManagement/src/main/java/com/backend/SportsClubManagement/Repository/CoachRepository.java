package com.backend.SportsClubManagement.Repository;

import com.backend.SportsClubManagement.Entity.Coach;
import com.backend.SportsClubManagement.Entity.Sport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CoachRepository extends JpaRepository<Coach,Long> {
    Coach findByName(String name);
    List<Coach> findBySportId(Long sportId);

    Coach findByNameAndSportId(String name, Long sportId);
}
