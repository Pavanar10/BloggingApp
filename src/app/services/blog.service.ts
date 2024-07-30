import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public blogData:Array<any>=[];
  constructor(private http:HttpClient) { }

  public postBlog(data:any){
    return new Promise<any>((resolve,reject)=>{
      this.http.post('http://localhost:3000/blogs',data).subscribe(
        (response)=>{
          resolve(response)
        },
      (erro)=>{
        reject(erro)
      })
    })
  }
  getBlog(){
    return new Promise<any>((resolve,reject)=>{
      this.http.get<any>('http://localhost:3000/blogs').subscribe((res)=>{
        resolve(res)
      },
    (err)=>{
      reject(err)
    })
    })
  }
  updateBlog(data:any){
    return new Promise((resolve,reject)=>{
      this.http.put<any>('http://localhost:3000/blogs/'+data.id,data).subscribe(
        (res)=>{
          resolve(res)
        },
        (err)=>{
          reject(err)
        }
      )
    })
  }
}
