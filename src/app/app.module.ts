import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BodyHomeComponent } from './body/body-home/body-home.component';
import { BodyOrderComponent } from './body/body-order/body-order.component';
import { BodyAboutUsComponent } from './body/body-about-us/body-about-us.component';
import { BodyContactComponent } from './body/body-contact/body-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    BodyHomeComponent,
    BodyOrderComponent,
    BodyAboutUsComponent,
    BodyContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
