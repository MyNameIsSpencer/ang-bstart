import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
// export class ProgressBarComponent implements OnInit {
//   public loadingPercent = 0;

//   constructor() { }

//   ngOnInit() {
//     this.loadingProgress(500).subscribe(i => (this.loadingPercent = i));
//   }

//   loadingProgress(speed: number) {
//     return interval(speed)
//       .pipe(
//         map(i => i * 10),
//         takeWhile(i => i <=100)
//       );
//   }
// }

export class LoadingLessonComponent implements OnInit {
  public loadingPercent = 0;

  ngOnInit() {
    this.loadingProgress(500)
        .subscribe(i => (this.loadingPercent = i));
  }

  loadingProgress(speed: number) {
    return interval(speed)
        .pipe(
            map(i => i * 10),
            takeWhile(i => i <= 100)
        );
  }
}
