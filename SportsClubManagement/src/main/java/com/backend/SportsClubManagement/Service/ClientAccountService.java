package com.backend.SportsClubManagement.Service;

import com.backend.SportsClubManagement.DTo.LoginRequest;
import com.backend.SportsClubManagement.Entity.ClientAccount;
import com.backend.SportsClubManagement.JWT.JwtService;
import com.backend.SportsClubManagement.Repository.ClientAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
            return jwtService.generateToken(clientAccount.getUsername(), clientAccount.getEmail(), clientAccount.getRole());
        }
        return null;
    }

    public List<ClientAccount> getClientAccounts() {
        return this.clientAccountRepository.findAll();
    }

    public List<ClientAccount> getClientAccountsByRole(String role) {
        return clientAccountRepository.findByRoleNot(role);
    }

    public void deleteClient(Long clientId){
        Optional<ClientAccount> client = clientAccountRepository.findById(Math.toIntExact(clientId));
        clientAccountRepository.delete(client.get());
    }
}
