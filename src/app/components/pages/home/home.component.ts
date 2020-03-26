import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.interface';
import { PostService } from './../../post/post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public post$:Observable<Post[]>  
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.post$=this.postService.getAllPost();
  }
}