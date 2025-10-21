package com.backend.SportsClubManagement.Repository;

import com.backend.SportsClubManagement.Entity.Sport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SportRepository extends JpaRepository<Sport,Long> {
}
