package com.backend.SportsClubManagement.Entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Table(name="coach")
@Data
public class Coach {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(name="name",nullable = false)
    private String name;

    @NotBlank
    @Email
    @Column(name="email",unique = true,nullable = false)
    private String email;


    @ManyToOne
    @JoinColumn(name = "sport_id", nullable = false)
    private Sport sport;

}
