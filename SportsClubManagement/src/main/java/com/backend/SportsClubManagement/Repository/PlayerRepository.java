package com.backend.SportsClubManagement.Repository;

import com.backend.SportsClubManagement.Entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player,Long> {
    Player findByName(String name);

    @Query(value = """
        SELECT p.id, p.name, p.position, p.age, p.team_id , p.sport_id
        FROM player p
        JOIN team t ON p.team_id = t.id
        JOIN coach c ON t.coach_id = c.id
        WHERE c.id = :coachId
    """,nativeQuery = true)
    List<Player> findByCoachId(@Param("coachId") Long coachId);
}
