import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Taskinfo } from './taskinfo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class TaskinfoserviceService {
  getTaskById(taskId: number) {
    throw new Error('Method not implemented.');
  }
  getTasksByProjectId: any;

  constructor(private http: HttpClient) { }

  private apiurl="http://localhost:3000/Proj_Tasks"


  addNewTask(task: Taskinfo): Observable<Object> {
    return this.http.post(`${this.apiurl}`, task);
  }

  getAllTasks(): Observable<Taskinfo[]> {
    return this.http.get<Taskinfo[]>(`${this.apiurl}`);
  }

  deleteTaskById(id: number): Observable<Object> {
    return this.http.delete(`${this.apiurl}/${id}`);
  }

  
}
