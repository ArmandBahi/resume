import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SummaryMapComponent } from './summary-map/summary-map.component';
import { AboutMeComponent } from './resume-parts/about-me/about-me.component';
import { CapabilitiesComponent } from './resume-parts/capabilities/capabilities.component';
import { ExperienceAndEducationComponent } from './resume-parts/experience-and-education/experience-and-education.component';
import { PersonalDetailsComponent } from './resume-parts/personal-details/personal-details.component';
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
      {
        path: 'personalDetails',
        component: PersonalDetailsComponent
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
    WelcomeModalComponent,
    FooterComponent,
    NavbarComponent,
    SummaryMapComponent,
    AboutMeComponent,
    CapabilitiesComponent,
    ExperienceAndEducationComponent,
    PersonalDetailsComponent,
    PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
