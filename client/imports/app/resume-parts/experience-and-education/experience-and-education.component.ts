import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
  selector: 'experience-and-education',
  templateUrl: 'experience-and-education.html',
  styleUrls: ['experience-and-education.scss']
})
export class ExperienceAndEducationComponent implements OnInit, OnDestroy {
  ngOnInit() {

  }
  ngOnDestroy() {

  }
}
