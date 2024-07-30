import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import { NewBlogComponent } from './pages/new-blog/new-blog.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    CreateBlogComponent,
    NewBlogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    QuillModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
