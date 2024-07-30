import { Component } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public blogService:BlogService){}


  ngOnInit(){
    this.blogService.getBlog().then((res)=>{
      
      this.blogService.blogData=res
      console.log(this.blogService.blogData)
    }).catch((err)=>{
      console.log(err);
    });
  }
}
