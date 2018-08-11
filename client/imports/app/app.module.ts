import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { ExperienceAndEducationComponent } from './experience-and-education/experience-and-education.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'aboutMe',
        component: AboutMeComponent
      },
      {
        path: 'capabilities',
        component: CapabilitiesComponent
      },
      {
        path: 'experienceAndEducation',
        component: ExperienceAndEducationComponent
      },
      // Home Page
      {
        path: '',
        redirectTo: '/aboutMe',
        pathMatch: 'full'
      },
      // 404 Page
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    AboutMeComponent,
    CapabilitiesComponent,
    ExperienceAndEducationComponent,
    PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
