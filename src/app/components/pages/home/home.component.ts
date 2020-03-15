import { Component, OnInit } from '@angular/core';
import {PostService} from '../../post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  urlImage='https://picsum.photos/id/';
  public posts1: {
    userId:string;
    id:string;
    title:string;
    body:string;
    image:string;
  }[];
  public posts: {
    id:string;
    titlePost:string;
    contentPost:string;
    imagePost:string;
  }[] = [
    {
      id:'1',
      titlePost:'Post One',
      contentPost:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!`, // Colocamos comillas diagonales para que haya saltos de linea
      imagePost:'https://picsum.photos/id/1/200/300'
    },
    {
      id:'2',
      titlePost:'Post Two',
      contentPost:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!`, // Colocamos comillas diagonales para que haya saltos de linea
      imagePost:'https://picsum.photos/id/2/200/300'
    },
    {
      id:'3',
      titlePost:'Post three',
      contentPost:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!`, // Colocamos comillas diagonales para que haya saltos de linea
      imagePost:'https://picsum.photos/200/300'
    },
    {
      id:'4',
      titlePost:'Post four',
      contentPost:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!`, // Colocamos comillas diagonales para que haya saltos de linea
      imagePost:'https://picsum.photos/seed/picsum/200/300'
    },
  ];
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getPosts();
    console.log('csadasd ', this.posts1);
  }
  getPosts(){
    this.postService.getPost().
    subscribe(
      res => {
        this.posts1=res
        for (const i in this.posts1) {
          let aux= parseInt(i)+1;
          if(aux==86 || aux==97){
              aux=aux+1;
          }
          this.posts1[i].image=`${this.urlImage}/${aux}/200/300`;
        }
        console.log(this.posts1);
      },
      error => {
        console.log(error);
      }
    );
  }
}
