import { Component, OnInit } from '@angular/core';
import { Taskinfo } from '../taskinfo';
import { Projectinfo } from '../projectinfo';
import { TaskinfoserviceService } from '../taskinfoservice.service';
import { ProjectinfoserviceService } from '../projectinfoservice.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-taskinfo',
  templateUrl: './taskinfo.component.html',
  styleUrls: ['./taskinfo.component.css']
})
export class TaskinfoComponent implements OnInit {
  task: Taskinfo = new Taskinfo(0, '', '', 0);
  tasks: Taskinfo[] = [];
  projects: Projectinfo[] = [];

  constructor(
    private router: Router, 
    private taskInfoService: TaskinfoserviceService,
    private projectInfoService: ProjectinfoserviceService
  ) {}

  ngOnInit() {
    this.getProjectInfo();
    this.getTasks();
  }

  getProjectInfo() {
    this.projectInfoService.getAllProjects().subscribe(data => {
      this.projects = data;
    });
  }

  getTasks() {
    this.taskInfoService.getAllTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  addTask(formvalidation:any) {
    this.taskInfoService.addNewTask(this.task).subscribe(data => {
      console.log('Task added successfully!', data);
      this.getTasks();
      this.task = new Taskinfo(0, '', '', 0);
    });
  }


  deleteTask(id: number) {
    if(confirm("Are u sure to delete?")==true){

      this.taskInfoService.deleteTaskById(id).subscribe(data => {
        console.log('Task deleted successfully!', data);
        this.getTasks();
      });
    }
    
  }
  
}
