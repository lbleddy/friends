import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient) { }
  getUsers(): Observable<User[]> {
    return (this.http.get<User[]>('http://localhost:8080/users'));
  }

  getUserById(id:number):Observable<any>{
    const url = 'http://localhost:8080/users/' + id;
    return this.http.get(url)
  
}
 addUser(user:User){
  console.log('User received');
  this.http.post('http://localhost:8080/users',user);
 }

 
  
  
  private handleError<T>(operation = 'operation' ,
  result?: T){
    return (error:any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.message}');
      return (result as any);
    }
  }
}
