import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { BodyHomeComponent } from './body/body-home/body-home.component';
import { BodyOrderComponent } from './body/body-order/body-order.component';
import { BodyAboutUsComponent } from './body/body-about-us/body-about-us.component';
import { BodyContactComponent } from './body/body-contact/body-contact.component';


const routes: Routes = [
  { path: 'Body', component: BodyComponent },
  { path: 'BodyHome', component: BodyHomeComponent },
  { path: 'BodyOrder', component: BodyOrderComponent },
  { path: 'BodyAboutUs', component: BodyAboutUsComponent },
  { path: 'BodyContact', component: BodyContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
