import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from './meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingserviceService {

  private apiurl="http://localhost:3000/Client_Meetings"

  constructor(private http: HttpClient) { }

  getMeetings(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(this.apiurl);
  }

  addMeeting(meeting: Meeting): Observable<Meeting> {
    return this.http.post<Meeting>(this.apiurl, meeting);
  }

  deleteMeeting(id: number): Observable<object> {
    return this.http.delete(`${this.apiurl}/${id}`);
  }
  
}
