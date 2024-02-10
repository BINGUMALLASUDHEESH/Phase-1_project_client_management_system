import { Component, OnInit } from '@angular/core';
import { ProjectinfoserviceService } from '../projectinfoservice.service';
import { Router } from '@angular/router';
import { Projectinfo } from '../projectinfo';
import { Client } from '../client';
import { ClientserviceService } from '../clientservice.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  constructor(private router: Router, private projectInfoService: ProjectinfoserviceService,private clientservice:ClientserviceService) { }
  clients: Client[] = [];
  projectInfo: Projectinfo = new Projectinfo(0, '', '', 0);
  projects: Projectinfo[] = [];
  showPopup = false;

  ngOnInit() {
    this.getProjectInfo();
    this.getClients();
  }

  getClients() {
    this.clientservice.showallClients().subscribe(data => {
      this.clients = data;
    });
  }
  
  getProjectInfo() {
    this.projectInfoService.getAllProjects().subscribe(data => {
      this.projects = data;
    });
  }

  openPopup() {
    this.showPopup = true;
  }

  addProject(projectdetails: any) {
    if(projectdetails.valid){
      this.projectInfoService.addNewProject(this.projectInfo).subscribe(data => {
        console.log('Project added successfully!', data);
        this.getProjectInfo(); 
        this.showPopup = false; 
        projectdetails.reset(); 
      });
    }
    else{
      alert("please fill all the details")
    }
  }

  deleteProject(id: number) {
    this.projectInfoService.deleteProjectById(id).subscribe(data => {
      console.log('Project deleted successfully!', data);
      this.getProjectInfo(); 
    });
  }

  updateProject(id: number) {
    this.router.navigate(['/updateproject', id]);
  }

}