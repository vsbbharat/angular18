import { AuthToken, UserDetail } from '@models/auth.model';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { CONSTANTS } from '@enums/constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private _http: HttpClient) {}

  login(userdetails: UserDetail): Observable<AuthToken>  {
    const body = new HttpParams()
      .set(CONSTANTS.USERNAME, userdetails.username)
      .set(CONSTANTS.PASSWORD, userdetails.password);

    return this._http.post<AuthToken>('<login_URL>', body.toString(), {
      headers: this.headers,
    });
  }

  logout() {
    const body = new HttpParams().set(CONSTANTS.REFRESH_TOKEN, this.getRefreshToken()!);
    this._http.post('<logout_URL>', body.toString(), { headers: this.headers }).subscribe({
      next: () => window.location.reload(),
      complete: () => {
        localStorage.clear();
      },
      error: () => {
        localStorage.clear();
        window.location.reload();
      },
    });
  }

  isLoggedIn() {
    return this.getToken() ? true : false; // add your strong logic
  }

  storeToken(token: AuthToken) {
    localStorage.setItem('token', token.access_token);
    localStorage.setItem(CONSTANTS.REFRESH_TOKEN, token.refresh_token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  refreshToken() {
    const body = new HttpParams().set(CONSTANTS.REFRESH_TOKEN, this.getRefreshToken()!);
    return this._http.post<AuthToken>('<refresh_token_url>', body.toString(), {
      headers: this.headers,
    });
  }

  getRefreshToken() {
    return localStorage.getItem(CONSTANTS.REFRESH_TOKEN);
  }
}
