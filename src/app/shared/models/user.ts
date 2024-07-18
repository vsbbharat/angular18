  
  import { AuthResponse } from '@models/auth-response';
  
  export class User {
    id: number;
    name: string;
    email: string;
    authResponse: AuthResponse;
  
    constructor(id: number, name: string, email: string, authResponse: AuthResponse) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.authResponse = authResponse;
    }
  }
  