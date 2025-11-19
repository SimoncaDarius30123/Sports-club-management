package com.backend.SportsClubManagement.Service;

import com.backend.SportsClubManagement.DTo.LoginRequest;
import com.backend.SportsClubManagement.Entity.ClientAccount;
import com.backend.SportsClubManagement.JWT.JwtService;
import com.backend.SportsClubManagement.Repository.ClientAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientAccountService {

    @Autowired
    private ClientAccountRepository clientAccountRepository;

    @Autowired
    private JwtService jwtService;

    public ClientAccount register(ClientAccount clientAccount) {
        return clientAccountRepository.save(clientAccount);
    }

    public String login(LoginRequest request) {
        ClientAccount clientAccount = clientAccountRepository.findByEmail(request.getEmail());
        if(clientAccount != null &&  clientAccount.getPassword().equals(request.getPassword())) {
            return jwtService.generateToken(clientAccount.getUsername(), clientAccount.getRole());
        }
        return null;
    }
}
