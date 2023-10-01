import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyncMainComponent } from 'src/app/features/modules/sync-main/sync-main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: SyncMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
