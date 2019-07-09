import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ToolbarLessonModule } from './toolbar-lesson/toolbar-lesson.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
// import { ToolbarLessonComponent } from './toolbar-lesson/toolbar-lesson.component';
import LessonConfigService from './lesson-config.service';
import { IconsLessonComponent } from './icons-lesson/icons-lesson.component';
import { InputsLessonComponent } from './inputs-lesson/inputs-lesson.component';
import { LoadingLessonComponent } from './loading-lesson/loading-lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    // ToolbarLessonComponent,
    IconsLessonComponent,
    InputsLessonComponent,
    LoadingLessonComponent
  ],
  imports: [
    ToolbarLessonModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [LessonConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
