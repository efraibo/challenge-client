import {Component} from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'sidenav-responsive-example',
  templateUrl: 'sidenav-responsive-example.html',
  styleUrls: ['sidenav-responsive-example.css'],
})
export class SidenavResponsiveExample {

//   fillerNav = Array(1).fill(0).map((_, i) => `Despesa ${i + 1}`);

  fillerNav: Array<String> = ['Despesa'];  
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */