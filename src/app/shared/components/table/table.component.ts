import { element } from 'protractor';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PostService } from './../../../components/post/post.service';
import { Post } from '../../models/post.interface';

import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from './../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['titlePost', 'tagsPost', 'Actions']; // Enparejamos con los ng-container
  dataSource = new MatTableDataSource(); // Mostramos los datos en la tabla

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private postService: PostService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe(
      res => {
        this.dataSource.data = res; // Cargamos los datos
      },
      error => {
        console.log(error);
      }
    );
  }
  ngAfterViewInit() {
    // Se ejecuta cuando se inicia la visualizacion del component(Cuando se carga los estilos y la maquetacion)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onNewPost() {
    // console.log('New post')
    this.openDialog()
  }
  onEditPost(post: Post) {
    console.log('Edit', post);
    
  }
  onDeletePost(post: Post) {
    Swal.fire({
      title: '¿Estas Seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, ¡elimínalo!'
    }).then(
      res => {
        console.log(res);
        if (res.value) {
          this.postService.deletePost(post).then(
            () => {
              Swal.fire('¡Elminado!', 'Tu publicación ha sido eliminada', 'success');
            },
          ).catch(
            (error) => {
              Swal.fire('¡Error!', 'Se produjo un error al eliminar esta publicación.', 'error');
              console.log("Error al eliminar", error);
            }
          );
        }
      }
    );
  }
  openDialog():void{
    const dialogRef=this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(
      res =>{
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }
}
