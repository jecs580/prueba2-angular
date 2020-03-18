import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData:Observable<firebase.User>;
  constructor(public AfAuth: AngularFireAuth) {
    this.userData=AfAuth.authState;
   }

  loginByEmail(user: User) {
    const { email, password } = user;
    return this.AfAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    this.AfAuth.auth.signOut();
  }
}
