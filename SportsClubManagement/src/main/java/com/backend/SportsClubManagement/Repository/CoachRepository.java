package com.backend.SportsClubManagement.Repository;

import com.backend.SportsClubManagement.Entity.Coach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface CoachRepository extends JpaRepository<Coach,Long> {
    Coach findByName(String name);
}
