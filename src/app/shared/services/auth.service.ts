import { File } from './../models/file.interface';
import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData$: Observable<firebase.User>;
  private filePath: string;
  constructor(
    private AfAuth: AngularFireAuth,
    private storage: AngularFireStorage) {
    this.userData$ = AfAuth.authState;
  }

  loginByEmail(user: User) {
    const { email, password } = user;
    return this.AfAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    this.AfAuth.auth.signOut();
  }

  private saveUserProfile(user: User): void {
    this.AfAuth.auth.currentUser.updateProfile({
      displayName: user.displayName,
      photoURL: user.photoURL
    }).then(() => {
      console.log('Usuario Actualizado!');
    }).catch(error => {
      console.log('Error', error);

    });
  }
  preSaveUserProfile(user: User, image?: File): void {
    if (image) {
      this.uploadImage(user, image);
    } else {
      this.saveUserProfile(user);
    }
  }
  private uploadImage(user: User, image: File): void {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(
            urlImage => {
              user.photoURL = urlImage;
              this.saveUserProfile(user);
            }
          );
        })
      ).subscribe();
  }
}
