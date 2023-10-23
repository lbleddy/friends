import { Injectable } from '@angular/core';
import { HttpClient, HttpParamsOptions } from '@angular/common/http';

import { Observable, catchError, map } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient) { }
  getUsers(): Observable<User[]> {
    console.log('here in getUsers')
    return (this.http.get<User[]>('http://localhost:8080/users'));
  }

  getUserById(id:number):Observable<any>{
    const url = 'http://localhost:8080/users/' + id;
    return this.http.get(url)
  
}
 addUser(user:User):Observable<any>{
  var observable:Observable<any>;
  return this.http.post('http://localhost:8080/users/add',user.name)

 //...errors if
 }
deleteUser(id:number):Observable<any>{
  console.log("here in service");
  console.log(id);
  return this.http.delete('http://localhost:8080/users/'+id);
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
