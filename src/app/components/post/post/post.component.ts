import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.interface';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post$:Observable<Post>;
  public post:{
    id:string;
    titlePost:string;
    contentPost:string;
    imagePost:string;
  }={
    id:'1',
    titlePost:'Post One',
    contentPost:'Hola Mundo',
    imagePost:'https://picsum.photos/id/237/200/300'
  }
  constructor(
    private route:ActivatedRoute,
    private postsService:PostService) { }

  ngOnInit(): void {
    const idPost=this.route.snapshot.params.id; // El nombre del parametro es el que pusimos en el archivo de modulo rutas.
    this.post$=this.postsService.retrievePost(idPost);
    
  }

}
