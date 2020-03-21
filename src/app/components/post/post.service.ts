import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Post} from '../../shared/models/post.interface';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsCollection:AngularFirestoreCollection<Post>;

  constructor(private afs:AngularFirestore) {
    this.postsCollection=afs.collection<Post>('post');
   }
  public getAllPost():Observable<Post[]> {
      return this.postsCollection.snapshotChanges().pipe(
        map(actions => 
          actions.map(a => {
            const data = a.payload.doc.data() as Post;
            const id=a.payload.doc.id;
            return {id, ...data};
          })
        )
      );
  }
  public retrievePost(idPost:string):Observable<Post>{
    return this.afs.doc<Post>(`post/${idPost}`).valueChanges();
  }
  public deletePost(post:Post){
    return this.postsCollection.doc(post.id).delete();
  }
  public updatePost(post:Post){
    return this.postsCollection.doc(post.id).update(post);
  }
}
