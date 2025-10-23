package com.backend.SportsClubManagement.Repository;

import com.backend.SportsClubManagement.Entity.Player;
import org.apache.el.stream.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player,Long> {
    Player findByName(String name);
}
