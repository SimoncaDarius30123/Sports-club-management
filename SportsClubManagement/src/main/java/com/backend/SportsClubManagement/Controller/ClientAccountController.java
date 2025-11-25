package com.backend.SportsClubManagement.Controller;

import com.backend.SportsClubManagement.DTo.LoginRequest;
import com.backend.SportsClubManagement.Entity.ClientAccount;
import com.backend.SportsClubManagement.Service.ClientAccountService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/client-account")
public class ClientAccountController {

    @Autowired
    private ClientAccountService clientAccountService;

    @PostMapping("/register")
    public ClientAccount register(@Valid @RequestBody ClientAccount clientAccount) {
        return clientAccountService.register(clientAccount);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
        String token = clientAccountService.login(request);
        if(token != null){
            return ResponseEntity.ok(Map.of("token", token));
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/get-all")
    public List<ClientAccount> getAllClientAccount() {
        return clientAccountService.getClientAccounts();
    }
}
