import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post/post.service';
import { Post } from '../../../shared/models/post.interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public post$: Observable<Post[]>; // Colocamos el $ por convencion para indicar que sera un observable
  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.post$ = this.postsService.getAllPost();
  }
}