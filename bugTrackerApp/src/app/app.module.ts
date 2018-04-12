import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/views/bugStats.component';
import { BugAddComponent } from './bugTracker/views/bugAdd.component';


import { BugOperationsService } from './bugTracker/services/bugOperations.service';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugAddComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule,
    UtilsModule
  ],
  providers: [
  	BugOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
