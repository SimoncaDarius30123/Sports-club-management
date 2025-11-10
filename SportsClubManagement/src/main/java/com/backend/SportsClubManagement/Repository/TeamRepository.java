package com.backend.SportsClubManagement.Repository;

import com.backend.SportsClubManagement.DTo.GetTeamsWIthAveragePlayerAgeRequest;
import com.backend.SportsClubManagement.Entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TeamRepository extends JpaRepository<Team, Integer> {
    Team findByName(String name);
    Team findByNameAndSportId(String name, Long sport_id);
    List <Team> findBySportId(Long sport_id);

    @Query(value = """
        SELECT t.name AS teamName,AVG(p.age) AS AverageAge
        FROM team t
        JOIN player p ON p.team_id = t.id
        JOIN sport s ON s.id = t.sport_id
        WHERE t.sport_id = :sportId
        GROUP BY (t.id,t.name)
        ORDER BY t.id ASC
    """,nativeQuery = true)
    List<GetTeamsWIthAveragePlayerAgeRequest> findTeamsWithAveragePlayerAge(Long sportId);
}
