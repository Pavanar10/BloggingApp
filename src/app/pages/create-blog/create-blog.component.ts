import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

export const QuillConfiguration = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    ['link'],
    ['clean'],
  ],
}
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})


export class CreateBlogComponent {

quillConfiguration=QuillConfiguration;

username:string='';
title:string='';
content:string='';
constructor(public blogService:BlogService,private router:Router){}

createBlog(){
let obj={
  author:this.username,
  title:this.title,
  content:this.content,
  comments:[]
}

this.blogService.postBlog(obj)
.then((res)=>{
console.log(res);
this.router.navigate(['/home'])
})
.catch((err)=>{
  console.log(err)
});
}

}
