import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppService } from '@services/app.service';
import { AuthService } from '@services/auth.service';
import { AuthToken, UserDetail } from '@models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  userDetail: UserDetail = new UserDetail();

  constructor(private fb: FormBuilder,private service: AuthService) {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  async onSubmit() {
    if (this.loginForm.valid) {
      const { userId, password } = this.loginForm.value;
      console.log('User Id:', userId);
      console.log('Password:', password);
       this.service.login(this.userDetail).subscribe((data:AuthToken)=>{
        console.log(data);
       },(error)=>{
        console.log(error);
       })
      // Handle the login logic here
    }
  }
}
