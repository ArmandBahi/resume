import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
  selector: 'personal-details',
  templateUrl: 'personal-details.html',
  styleUrls: ['personal-details.scss']
})
export class PersonalDetailsComponent implements OnInit, OnDestroy {
  ngOnInit() {

  }
  ngOnDestroy() {

  }
}
