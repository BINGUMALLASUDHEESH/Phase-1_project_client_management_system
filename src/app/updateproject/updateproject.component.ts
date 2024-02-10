import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectinfoserviceService } from '../projectinfoservice.service';
import { Projectinfo } from '../projectinfo';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent {

  project: Projectinfo = new Projectinfo(0, '', '', 0);

  constructor(private route: ActivatedRoute, private router: Router, private projectInfoService: ProjectinfoserviceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.projectInfoService.getProjectById(id).subscribe(data => {
        this.project = data;
      });
    });
  }

  updateProject() {
    this.projectInfoService.updateProject(this.project).subscribe(() => {
      console.log('Project updated successfully!');
      this.router.navigate(['/projectinfo']); 
    });
  }
}


