import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
  selector: 'capabilities',
  templateUrl: 'capabilities.html',
  styleUrls: ['capabilities.scss']
})
export class CapabilitiesComponent implements OnInit, OnDestroy {
  ngOnInit() {

  }
  ngOnDestroy() {

  }
}
