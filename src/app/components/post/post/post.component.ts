import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../post/post.service';
import { Post } from '../../../shared/models/post.interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  constructor(private postsService: PostService) { }

  ngOnInit(): void {
  }

}
