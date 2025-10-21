package com.backend.SportsClubManagement.Repository;

import com.backend.SportsClubManagement.Entity.Coach;
import org.springframework.data.repository.CrudRepository;

public interface CoachRepository extends CrudRepository<Coach,Long> {
}
