import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
  selector: 'about-me',
  templateUrl: 'about-me.html',
  styleUrls: ['about-me.scss']
})
export class AboutMeComponent implements OnInit, OnDestroy {
  ngOnInit() {

  }
  ngOnDestroy() {

  }
}
