import { TableComponent } from './../../../shared/components/table/table.component';
import { MaterialModule } from './../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPostsRoutingModule } from './list-posts-routing.module';
import { ListPostsComponent } from './list-posts.component';

@NgModule({
  declarations: [ListPostsComponent, TableComponent],
  imports: [
    CommonModule,
    ListPostsRoutingModule,
    MaterialModule
  ]
})
export class ListPostsModule { }
