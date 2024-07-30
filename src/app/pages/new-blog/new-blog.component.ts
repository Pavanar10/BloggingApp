import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent {
constructor(public blogService:BlogService,private route:ActivatedRoute){}

blogID:any;
username:string='';
comment:string='';

ngOnInit(){
  if(this.blogService.blogData.length===0){
    this.blogService.getBlog().then((res)=>{
      
      this.blogService.blogData=res
      console.log(this.blogService.blogData)
    }).catch((err)=>{
      console.log(err);
    });
  }
  this.blogID=this.route.snapshot.paramMap.get('blogIndex');
}

addComment(){
  let obj={
    username:this.username,
    comment:this.comment
  }
  console.log(this.blogService.blogData[this.blogID])
  this.blogService.blogData[this.blogID].comments.push(obj);
  this.blogService.updateBlog(this.blogService.blogData[this.blogID]).then(
    (res)=>{
      console.log(res);
      this.username='';
      this.comment='';
    },
  (err)=>{
console.log(err)
  })
}
}
