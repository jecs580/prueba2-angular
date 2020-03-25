import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(): Observable<boolean> {
    return this.authService.userData$.pipe(
      map(user => {
        if (!user) {
          // Redireccionar a la pagina de login
          this.router.navigate(['/login']);
          return false
        }
        return true
      })
    );
  }

}
