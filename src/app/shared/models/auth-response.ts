// src/app/models/auth-response.model.ts

export class AuthResponse {
  token: string;
  expiresIn: number;
  refreshToken: string;

  constructor(data: { token: string; expiresIn: number; refreshToken: string }) {
    this.token = data.token;
    this.expiresIn = data.expiresIn;
    this.refreshToken = data.refreshToken;
  }
}
