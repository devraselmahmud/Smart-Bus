package com.cityzone.services;

import com.cityzone.dto.SignupRequest;

public interface AuthService {
  boolean isUserCreated(SignupRequest signupRequest);
}
