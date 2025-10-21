package com.backend.SportsClubManagement.Repository;

import com.backend.SportsClubManagement.Entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Integer> {
}
