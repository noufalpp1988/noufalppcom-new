import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PersonalComponent } from './about/personal/personal.component';
import { ProfessionalComponent } from './about/professional/professional.component';
import { WorksComponent } from './works/works.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { WorkCreateComponent } from './work-create/work-create.component';
import { WorkEditComponent } from './work-edit/work-edit.component';
import { ProjectsComponent } from './works/projects/projects.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/personal',
    component: PersonalComponent
  },
  {
    path: 'about/professional',
    component: ProfessionalComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'works',
    component: WorksComponent
  },
  {
    path: 'works/:id',
    component: ProjectsComponent

  },
  {
    path: 'work-detail/:id',
    component: WorkDetailComponent,
    data: { title: 'Work Details' }
  },
  {
    path: 'work-create',
    component: WorkCreateComponent,
    data: { title: 'Create Work' }
  },
  {
    path: 'work-edit/:id',
    component: WorkEditComponent,
    data: { title: 'Edit Work' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
