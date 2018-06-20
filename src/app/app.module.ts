import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core'; // NO_ERRORS_SCHEMA for md-bootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md'; // for md-bootstrap
import { DataService } from "./data.service"; // data service

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PersonalComponent } from './personal/personal.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { WorksComponent } from './works/works.component';
import { ProjectsComponent } from './works/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PersonalComponent,
    NavigationComponent,
    WorksComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
