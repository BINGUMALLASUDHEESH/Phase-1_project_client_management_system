import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting';
import { Client } from '../client';
import { MeetingserviceService } from '../meetingservice.service';
import { ClientserviceService } from '../clientservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-clientmeeting',
  templateUrl: './clientmeeting.component.html',
  styleUrls: ['./clientmeeting.component.css']
})
export class ClientmeetingComponent implements OnInit  {

  meetings: Meeting[] = [];
  clients: Client[] = [];

  newMeeting: Meeting = new Meeting(0, '', 0, '', 0, '');

  showForm: boolean = false;

  constructor(private meetingService: MeetingserviceService,private clientservice:ClientserviceService,private route:Router) { }

  ngOnInit(): void {
    this.getMeetings();
    this.getClients();
  }

  getClients(): void {
    this.clientservice.showallClients().subscribe((data: Client[]) => {
      this.clients = data;
    });
  }

  getMeetings(): void {
    this.meetingService.getMeetings().subscribe((data: Meeting[]) => {
      this.meetings = data;
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  submitForm(): void {
    this.meetingService.addMeeting(this.newMeeting).subscribe((data: Meeting) => {
      console.log('Meeting added successfully!', data);
      this.meetings.push(data);
      this.newMeeting = new Meeting(0, '', 0, '', 0, '');
    });
  }

  deleteMeeting(id: number): void {
    if(confirm("are you sure you want to delete it !")===true){
      this.meetingService.deleteMeeting(id).subscribe(() => {
        console.log('Meeting deleted successfully!');
       this.ngOnInit()
      });
    }
  }

}
