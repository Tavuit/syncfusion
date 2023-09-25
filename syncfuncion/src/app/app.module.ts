import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyncDialogComponent } from 'src/app/shared/base-components/views/sync-dialog/sync-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SyncDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
