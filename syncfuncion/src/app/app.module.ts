import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { RibbonModule, RibbonAllModule } from "@syncfusion/ej2-angular-ribbon";
import { SyncDialogComponent } from 'src/app/shared/base-components/views/sync-dialog/sync-dialog.component';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { SyncAccordionComponent } from 'src/app/shared/base-components/views/sync-accordion/sync-accordion.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridAllModule,
    RibbonModule,
    RibbonAllModule,
    AccordionModule,

    SyncDialogComponent,
    SyncAccordionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
