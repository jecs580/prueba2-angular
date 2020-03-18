import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {MaterialModule} from '../../../material.module';
import {ReactiveFormsModule} from '@angular/forms';
// Como login tiene su propio modulo tambien se debe import las librerias que se usaran fuera de las
// importaciones en el app.module
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class LoginModule { }
