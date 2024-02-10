import { Component, OnInit } from '@angular/core';
import { Projectinfo } from '../projectinfo';
import { Taskinfo } from '../taskinfo';
import { ProjectinfoserviceService } from '../projectinfoservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskinfoserviceService } from '../taskinfoservice.service';

@Component({
  selector: 'app-project-details-component',
  templateUrl: './project-details-component.component.html',
  styleUrls: ['./project-details-component.component.css']
})
export class ProjectDetailsComponentComponent implements OnInit  {

  projectId: any="";
  task:Taskinfo[]=[]

  constructor(private route: ActivatedRoute,private taskservice:TaskinfoserviceService,private routes:Router) { }

  ngOnInit(): void {
    
    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log('Project ID:', this.projectId); 

    this.taskservice.getAllTasks().subscribe(data => {
      this.task = data.filter(task => task.projectid === this.projectId);
      console.log(this.task); 
    });
  }

  goBack(): void {
    
    this.routes.navigate(['/projectinfo']); 
  }
   
 
}
