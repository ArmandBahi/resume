import '../../polyfills.spec.ts';

import { getTestBed, TestBed, async } from '@angular/core/testing';
import { SummaryMapComponent } from './todo-list.component';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';
import { spy } from 'sinon';

describe(`SummaryMapComponent`, () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SummaryMapComponent], //declare test component
        })
            .compileComponents(); //compile html and css
    }));

    afterEach(() => {
        getTestBed().resetTestingModule();
    });

});
