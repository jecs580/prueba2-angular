import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
      imagePost:'https://picsum.photos/id/237/200/300'
    },
    {
      id:'2',
      titlePost:'Post Two',
      contentPost:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!`, // Colocamos comillas diagonales para que haya saltos de linea
      imagePost:'https://picsum.photos/id/237/200/300'
    },
    {
      id:'3',
      titlePost:'Post three',
      contentPost:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!`, // Colocamos comillas diagonales para que haya saltos de linea
      imagePost:'https://picsum.photos/id/237/200/300'
    },
    {
      id:'4',
      titlePost:'Post four',
      contentPost:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro facere nihil culpa adipisci, quo saepe, eos sint facilis vero placeat magnam dicta suscipit velit ad cum ipsa debitis, doloremque laboriosam.Incidunt sit, nemo exercitationem harum ducimus nihil officiis dolores facere ratione odio consequatur facilis quisquam dolor fugit velit deserunt natus accusantium? Quidem eaque ea aut aliquid sit est quibusdam ducimus!`, // Colocamos comillas diagonales para que haya saltos de linea
      imagePost:'https://picsum.photos/id/237/200/300'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
