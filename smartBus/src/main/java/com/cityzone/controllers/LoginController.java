package com.cityzone.controllers;

import com.cityzone.dto.LoginRequest;
import com.cityzone.dto.LoginResponse;
import com.cityzone.services.jwt.UserServiceImpl;
import com.cityzone.utils.JwtUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

  private final AuthenticationManager authenticationManager;

  private final UserServiceImpl userService;

  private final JwtUtils jwtUtils;


  public LoginController(AuthenticationManager authenticationManager, UserServiceImpl userService, JwtUtils jwtUtils) {
    this.authenticationManager = authenticationManager;
    this.userService = userService;
    this.jwtUtils = jwtUtils;
  }

  @PostMapping
  public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {

    try {
      authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
      );
    } catch (AuthenticationException e) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    UserDetails userDetails;

    try {
      userDetails = userService.loadUserByUsername(loginRequest.getEmail());
    } catch (UsernameNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    String jwt = jwtUtils.generateToken(userDetails.getUsername());

    // Additional Login
//    System.out.println(jwt);

    return ResponseEntity.ok(new LoginResponse(jwt));
  }

}
