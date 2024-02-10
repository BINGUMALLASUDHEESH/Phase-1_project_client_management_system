import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ClientprojectComponent } from './clientproject/clientproject.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { ProjectDetailsComponentComponent } from './project-details-component/project-details-component.component';
import { TaskinfoComponent } from './taskinfo/taskinfo.component';
import { ClientmeetingComponent } from './clientmeeting/clientmeeting.component';
import { loginguardGuard } from './loginguard.guard';


const routes: Routes = [
  {
    path:"",component:HomescreenComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"home",component:HomeComponent,canActivate:[loginguardGuard]
  },
  {
    path:"clientinfo",component:ClientInfoComponent,canActivate:[loginguardGuard]
  },
  {
    path:"projects",component:ClientprojectComponent,canActivate:[loginguardGuard]
  },
  {
    path:"projectinfo",component:ProjectInfoComponent,canActivate:[loginguardGuard]
  },
  {
    path:"updateproject/:id",component:UpdateprojectComponent,canActivate:[loginguardGuard]
  },
  {
    path:"taskinfo",component:TaskinfoComponent,canActivate:[loginguardGuard]
  },
  {
    path:"projectdetails/:id",component:ProjectDetailsComponentComponent,canActivate:[loginguardGuard]
  },
  {
    path:"clientmeeting",component:ClientmeetingComponent,canActivate:[loginguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
