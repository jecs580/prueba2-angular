import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {User} from '../../../shared/models/user.interface';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router
    ) { }

  loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required) // FormControl('<Valor por defecto>')
  });

  ngOnInit(): void {
    }
    //   email:'jorge@gmail.com',
    //   password:'12394085lp'
    onLogin(form:User){
    this.authService.loginByEmail(form).then(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      }
    ).catch(
      error => {
        console.log(error);
      }
    )
    
  }
}
