import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private basePath = 'http://localhost:48899/api/ToDo';
  constructor(private http: HttpClient) { }

  public getToDos(): Observable<any>{
    return this.http.get(this.basePath);
  }
}
