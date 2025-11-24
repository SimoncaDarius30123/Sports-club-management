package com.backend.SportsClubManagement.AI;

import com.backend.SportsClubManagement.Entity.Player;
import com.backend.SportsClubManagement.Service.PlayerService;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class AiService {

    @Autowired
    private PlayerService playerService;

    private final Client geminiClient;

    public AiService() {
        // it takes the api key
        this.geminiClient = new Client();
    }

    public String askGemini(String userMessage){
        String playerList = playerService.listPlayers().stream()
                .map(Player::toString)
                .collect(Collectors.joining("; "));

        String prompt =
                "You are a chatbot. Database contains: [" + playerList +
                        "]. Give a response to this request: " + userMessage +
                        "Don't give their id's and add <<He is playing >> and the sport name"+
                        "If the player doesn't have a team add <<Not assigned to a team yet>> " +
                        ". If request does not refer to the database, reply with <<Player not found>>.";
        GenerateContentResponse response =
                geminiClient.models.generateContent(
                        "gemini-2.5-flash",
                        prompt,
                        null
                );
        return response.text();
    }

}
