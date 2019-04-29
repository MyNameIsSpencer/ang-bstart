// import { Component, HostListener } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',

  template: `
    <mat-toolbar color="primary">
      Structuring stuff with Angular Material
    </mat-toolbar>
  `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'm5atprac';
}
