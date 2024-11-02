package com.cityzone.services;

import com.cityzone.dto.SignupRequest;
import com.cityzone.entities.User;
import com.cityzone.repository.StudentInfoRepository;
import com.cityzone.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

  private final StudentInfoRepository studentInfoRepository;
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public AuthServiceImpl(StudentInfoRepository studentInfoRepository, UserRepository userRepository, PasswordEncoder passwordEncoder) {
    this.studentInfoRepository = studentInfoRepository;
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
  }

  @Override
  public boolean isUserCreated(SignupRequest signupRequest) {

    if(userRepository.existsByEmail(signupRequest.getEmail())) {
      return false;
    }

    if(! studentInfoRepository.existsByStudentId(signupRequest.getStudentId())) {
      return false;
    } else {
      User user = new User();

      BeanUtils.copyProperties(signupRequest, user);

      String hashPassword = passwordEncoder.encode(signupRequest.getPassword());
      user.setPassword(hashPassword);

      userRepository.save(user);

      return true;
    }
  }
}
