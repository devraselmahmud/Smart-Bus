package com.cityzone.controllers;

import com.cityzone.dto.SignupRequest;
import com.cityzone.services.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/signup")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SignupController {

  private final AuthService authService;

  public SignupController(AuthService authService) {
    this.authService = authService;
  }

  @PostMapping
  public ResponseEntity<String> signupUser(@RequestBody SignupRequest signupRequest) {
    boolean isUserCreated = authService.isUserCreated(signupRequest);
    if(isUserCreated) {
      return ResponseEntity.status(HttpStatus.CREATED).body("User created successfully");
    }
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to create user!");
  }

}
