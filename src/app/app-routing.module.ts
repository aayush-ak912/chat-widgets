import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DragndropskinComponent } from './components/dragndropskin/dragndropskin.component';
import { DragndropwallboarbComponent } from './components/dragndropwallboarb/dragndropwallboarb.component';
import { LayoutsComponent } from './components/layouts/layouts.component';

const routes: Routes = [
  { path: '', component: LayoutsComponent },
  { path: 'skin', component: DragndropskinComponent },
  { path: 'wallboard', component: DragndropwallboarbComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
