package com.backend.SportsClubManagement.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "team")
@Data
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name",nullable = false,unique = true)
    private String name;

    @ManyToOne
    @JoinColumn(name="coach_id")
    private Coach coach;

    @ManyToOne
    @JoinColumn(name = "sport_id")
    private Sport sport;
}
