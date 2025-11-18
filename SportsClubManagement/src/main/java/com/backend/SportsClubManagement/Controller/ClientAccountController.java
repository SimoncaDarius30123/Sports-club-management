package com.backend.SportsClubManagement.Controller;

import com.backend.SportsClubManagement.DTo.LoginRequest;
import com.backend.SportsClubManagement.Entity.ClientAccount;
import com.backend.SportsClubManagement.Service.ClientAccountService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        ClientAccount clientAccount = clientAccountService.login(request);
        if(clientAccount != null){
            return ResponseEntity.ok(clientAccount);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
