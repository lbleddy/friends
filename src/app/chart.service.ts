import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient) { }
  getUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/users');
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
