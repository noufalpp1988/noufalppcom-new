import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'; // NO_ERRORS_SCHEMA for md-bootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md'; // for md-bootstrap
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from "./data.service"; // data service

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PersonalComponent } from './about/personal/personal.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { WorksComponent } from './works/works.component';
import { ProjectsComponent } from './works/projects/projects.component';
import { BodyDirectDirective } from './body-direct.directive';
import { ProfessionalComponent } from './about/professional/professional.component';
import { FooterComponent } from './common/footer/footer.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { WorkCreateComponent } from './work-create/work-create.component';
import { WorkEditComponent } from './work-edit/work-edit.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PersonalComponent,
    NavigationComponent,
    WorksComponent,
    ProjectsComponent,
    BodyDirectDirective,
    ProfessionalComponent,
    FooterComponent,
    WorkDetailComponent,
    WorkCreateComponent,
    WorkEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
