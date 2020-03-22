import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Post } from '../../shared/models/post.interface';
import { File } from '../../shared/models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsCollection: AngularFirestoreCollection<Post>;
  private filePath: any;
  private downloadURL: Observable<string>;
  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage) {
    this.postsCollection = afs.collection<Post>('post');
  }
  public getAllPost(): Observable<Post[]> {
    return this.postsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
  public retrievePost(idPost: string): Observable<Post> {
    return this.afs.doc<Post>(`post/${idPost}`).valueChanges();
  }
  public deletePost(post: Post) {
    return this.postsCollection.doc(post.id).delete();
  }
  public updatePost(post: Post) {
    return this.postsCollection.doc(post.id).update(post);
  }
  public preAddUpdatePost(post:Post, image:File): void{
    this.uploadImage(post,image);
  }
  private savePost(post: Post){
    const postObj= {
      titlePost:post.titlePost,
      contentPost:post.contentPost,
      imagePost:this.downloadURL,
      fileRef:this.filePath,
      tagsPost:post.tagsPost
    };
    // TODO editPost
    this.postsCollection.add(postObj);
  }
  private uploadImage(post: Post, image: File) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            this.savePost(post)
          },
          error => {
            console.log('Error de no se donde ptm',error);
            
          }
          );
        })
      ).subscribe();
  }
}
