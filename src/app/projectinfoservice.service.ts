import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projectinfo } from './projectinfo';

@Injectable({
  providedIn: 'root'
})
export class ProjectinfoserviceService {
  getProjectTasksByProjectId(projectId: number) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = "http://localhost:3000/Projects";

  constructor(private http: HttpClient) { }

  addNewProject(project: Projectinfo): Observable<Object> {
    return this.http.post(`${this.apiUrl}`, project);
  }

 
  getAllProjects(): Observable<Projectinfo[]> {
    return this.http.get<Projectinfo[]>(`${this.apiUrl}`);
  }

  
  deleteProjectById(id: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

 
  getProjectById(id: number): Observable<Projectinfo> {
    return this.http.get<Projectinfo>(`${this.apiUrl}/${id}`);
  }


  updateProject(project: Projectinfo): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${project.id}`, project);
  }
}
