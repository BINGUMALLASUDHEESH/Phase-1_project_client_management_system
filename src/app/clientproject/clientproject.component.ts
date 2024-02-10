import { Component, OnInit } from '@angular/core';
import { ClientserviceService } from '../clientservice.service';
import { ProjectinfoserviceService } from '../projectinfoservice.service';
import { TaskinfoserviceService } from '../taskinfoservice.service';
import { MeetingserviceService } from '../meetingservice.service';

@Component({
  selector: 'app-clientproject',
  templateUrl: './clientproject.component.html',
  styleUrls: ['./clientproject.component.css']
})
export class ClientprojectComponent  implements OnInit{

  name:any=sessionStorage.getItem('client_name')
  id:any=sessionStorage.getItem('client_id')
  email:any=""
  clients:any[]=[];
  projects: any[] = [];
  tasks: any[] = [];
  meetings: any[] = [];

  constructor(private clientService: ClientserviceService,private projectService: ProjectinfoserviceService,
    private taskService: TaskinfoserviceService,private meetingService: MeetingserviceService
  ) {}


  ngOnInit(): void {
  

      this.clientService.showallClients().subscribe(data=>{
        this.clients=data
      })

      this.projectService.getAllProjects().subscribe(projects => {
        this.projects = projects.filter(project => project.clientid === this.id);
      });

      this.taskService.getAllTasks().subscribe(tasks => {
        this.tasks = tasks.filter(task => this.projects.find(project => project.id === task.projectid));
      });

      this.meetingService.getMeetings().subscribe(meetings => {
        this.meetings = meetings.filter(meeting => meeting.clientId === this.id);
      });
    }


}

