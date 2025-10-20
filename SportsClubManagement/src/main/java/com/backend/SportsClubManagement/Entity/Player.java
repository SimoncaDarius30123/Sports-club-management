package com.backend.SportsClubManagement.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "player")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Player {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "position",nullable = false)
    private String position;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;
}
