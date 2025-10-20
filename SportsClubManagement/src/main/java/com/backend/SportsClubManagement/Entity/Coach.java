package com.backend.SportsClubManagement.Entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="coach")
@Data
public class Coach {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="email")
    private String email;

}
