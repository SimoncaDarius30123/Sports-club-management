package com.backend.SportsClubManagement.Repository;

import com.backend.SportsClubManagement.Entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player,Long> {
}
