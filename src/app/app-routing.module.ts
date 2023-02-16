import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './main/main.component';
import { Outer1Component } from './outer1/outer1.component';
import { Outer2Component } from './outer2/outer2.component';
import { Outer2widComponent } from './outer2wid/outer2wid.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'outer1', component: Outer1Component },
  { path: 'outer2', component: Outer2Component },
  { path: 'outer2wid/:id', component: Outer2widComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
