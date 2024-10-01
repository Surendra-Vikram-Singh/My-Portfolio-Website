import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModuleClass } from '../common/common.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ServicesComponent } from './services/services.component';
import { LogoComponent } from './logo/logo.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '', component: ComponentsComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'testimonials', component: TestimonialsComponent },
      { path: 'contact', component: ContactComponent },
      // { path: 'logo', component: LogoComponent }
    ]
  }
]

@NgModule({
  declarations: [
    ComponentsComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ServicesComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonModuleClass
  ]
})
export class ComponentsModule { }
