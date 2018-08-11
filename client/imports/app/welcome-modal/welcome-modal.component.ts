import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
  selector: 'welcome-modal',
  templateUrl: 'welcome-modal.html',
  styleUrls: ['welcome-modal.scss']
})
export class WelcomeModalComponent implements OnInit, OnDestroy {
  ngOnInit() {
    $('#welcome-modal').modal({
      inDuration: 0,
      endingTop: '0%'
    });
    $('#welcome-modal').modal('open');
  }
  ngOnDestroy() {

  }
}
