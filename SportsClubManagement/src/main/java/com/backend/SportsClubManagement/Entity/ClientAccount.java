package com.backend.SportsClubManagement.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Table(name = "clientaccount")
@Data
public class ClientAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank
    @Column(name = "username")
    private String username;

    @Email
    @Column(name = "email",unique = true)
    private String email;

    @NotBlank
    @Column(name = "password")
    private String password;

    @Column(name = "role", nullable = false)
    private String role = "CLIENT";
}
