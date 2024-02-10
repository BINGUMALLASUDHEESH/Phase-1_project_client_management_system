import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ClientprojectComponent } from './clientproject/clientproject.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { TaskinfoComponent } from './taskinfo/taskinfo.component';
import { ProjectDetailsComponentComponent } from './project-details-component/project-details-component.component';
import { ClientmeetingComponent } from './clientmeeting/clientmeeting.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomescreenComponent,
    ClientInfoComponent,
    ProjectInfoComponent,
    ClientprojectComponent,
    UpdateprojectComponent,
    TaskinfoComponent,
    ProjectDetailsComponentComponent,
    ClientmeetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
