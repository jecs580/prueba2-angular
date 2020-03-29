import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../../shared/services/auth.service';
import { User } from './../../../shared/models/user.interface';
import { File } from './../../../shared/models/file.interface';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public image: File;
  public currentImage = 'https://i.picsum.photos/id/514/150/150.jpg';

  constructor(private authService: AuthService) { }
  public profileForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    email: new FormControl({ value: '', disabled: true }, Validators.required), // desabilitaremos el campo
    photoURL: new FormControl('', Validators.required),

  });
  ngOnInit(): void {
    // TODO this.initValueForm(user)
    this.authService.userData$.subscribe(
      user => {
        this.initValueForm(user);
      },
      error => {
        console.log('Error aqui', error);

      }
    );
  }

  private initValueForm(user: User): void {
    if (user) {
      if (user.photoURL) {
        this.currentImage = user.photoURL;
      }
      this.profileForm.patchValue({
        displayName: user.displayName,
        email: user.email,
      });
    }

  }
  onSaveUser(user: User): void {
    this.authService.preSaveUserProfile(user, this.image);
  }
  handleImage(image: File): void {
    this.image = image;
  }
}
