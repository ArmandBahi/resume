import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
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
    PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
