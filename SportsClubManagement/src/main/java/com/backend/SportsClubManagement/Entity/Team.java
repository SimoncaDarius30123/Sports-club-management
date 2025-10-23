package com.backend.SportsClubManagement.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "team", uniqueConstraints = {@UniqueConstraint(columnNames = {"name", "sport_id"})})
@Data
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name",nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name="coach_id")
    private Coach coach;

    @ManyToOne
    @JoinColumn(name = "sport_id",nullable = false)
    private Sport sport;
}
