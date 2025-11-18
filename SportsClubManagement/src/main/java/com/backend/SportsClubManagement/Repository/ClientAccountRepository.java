package com.backend.SportsClubManagement.Repository;

import com.backend.SportsClubManagement.Entity.ClientAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientAccountRepository extends JpaRepository<ClientAccount, Integer> {
    ClientAccount findByEmail(String email);
}
