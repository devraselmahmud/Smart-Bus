package com.cityzone.dto;

public class LoginResponse {

//  @JsonProperty("jwt_token") or getter setter, learn serialize deserialize
//  @JsonProperty
  private String jwtToken;

  public LoginResponse(String jwtToken) {
    this.jwtToken = jwtToken;
  }

  public String getJwtToken() {
    return jwtToken;
  }

  public void setJwtToken(String jwtToken) {
    this.jwtToken = jwtToken;
  }
}
