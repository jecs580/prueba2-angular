import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from './../../../shared/models/post.interface';
import { PostService } from './../post.service';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  private image:any;
  private imageOrigin:any;

  @Input() post:Post;

  constructor(private postsService:PostService) { }
  public editPostForm = new FormGroup({
    id:new FormControl('',Validators.required),
    titlePost:new FormControl('',Validators.required),
    contentPost:new FormControl('',Validators.required),
    tagsPost:new FormControl('',Validators.required),
    imagePost:new FormControl('',Validators.required)
  });
  ngOnInit(): void {
    this.image=this.post.imagePost;
    this.imageOrigin=this.post.imagePost;
    this.initValueForm();
    console.log("id post ",this.post.id);
    
  }
  editPost(post:Post, image?:File){
    console.log('Img', this.image);
    console.log('Origin', this.imageOrigin);
    if (this.image == this.imageOrigin) {
      post.imagePost = this.imageOrigin;
      this.postsService.updatePost(post);
    }else{
      this.postsService.updatePost(post, this.image);
    }
  }
  handleImage(event:any):void{
    this.image=event.target.files[0];
  }
  private initValueForm():void{
    this.editPostForm.patchValue({
      id:this.post.id,
      titlePost:this.post.titlePost,
      contentPost:this.post.contentPost,
      tagsPost:this.post.tagsPost
    })
  }
}
