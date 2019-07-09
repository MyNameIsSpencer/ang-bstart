// import { InputsLessonComponent } from './inputs-lesson.component';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material';

// @NgModule({
//   declarations: [InputsLessonComponent],
//   imports: [
//     CommonModule,
//     MatInputModule,
//     FormsModule,
//     ReactiveFormsModule
//   ]
// })
// export class InputsLessonModule { }


import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {
  MatInputModule,
} from '@angular/material';

import { InputsLessonComponent } from './inputs-lesson.component';

@NgModule({
  declarations: [InputsLessonComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule]
  // If you wish to globally configure placeholder options
  // providers: [
  //   { provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'never' } }
  // ]
})
export class InputsLessonModule {}
