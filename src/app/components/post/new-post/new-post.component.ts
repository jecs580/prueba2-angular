import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from './../../../shared/models/post.interface';
import { PostService } from './../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  private image:any;
  constructor(private postsService:PostService) { }
  public newPostForm = new FormGroup({
    titlePost:new FormControl('',Validators.required),
    contentPost:new FormControl('',Validators.required),
    tagsPost:new FormControl('',Validators.required),
    imagePost:new FormControl('',Validators.required)
  });
  ngOnInit(): void {
  }
  addNewPost(post: Post){
    console.log('New post', post);
    this.postsService.preAddUpdatePost(post, this.image);
  }
  handleImage(event:any):void{
    this.image=event.target.files[0];
    console.log(this.image);
    
    
  }
}
