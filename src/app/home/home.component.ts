import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';

import { ModelService } from '../shared/model/model.service';
import { isBrowser } from 'angular2-universal';
import * as $ from 'jquery';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'Shopping Lite Home';
  data: any = {};
  constructor(public model: ModelService) {

    // we need the data synchronously for the client to set the server response
    // we create another method so we have more control for testing
    this.universalInit();
  }

  universalInit() {
    this.model.get('/data.json').subscribe(data => {
      this.data = data;
    });

  }

  ngOnInit() {
    // Run Jquery code if needed only inside if browser
    if (isBrowser) {
      
    }
  }

}
