import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { NewBlogComponent } from './pages/new-blog/new-blog.component';

const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},
  {
  path:'home',component:HomeComponent
},
{path:'createblog',component:CreateBlogComponent},
{path:'view/:blogIndex',component:NewBlogComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
