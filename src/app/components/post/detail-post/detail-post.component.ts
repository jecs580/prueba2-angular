import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.interface';
@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {
  public post$:Observable<Post>;
  constructor(
    private route:ActivatedRoute,
    private postsService:PostService
  ) { }

  ngOnInit(): void {
    const idPost=this.route.snapshot.params.id; // El nombre del parametro es el que pusimos en el archivo de modulo rutas.
    this.post$=this.postsService.retrievePost(idPost);
  }

}
