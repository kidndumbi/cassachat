import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { contactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AboutHomeComponent, AboutItemComponent } from './about/aboutChildren.component';
import { MainService  } from './services/app.services';
import { AppRoutingModule } from './app.routingModule';



@NgModule({
  declarations: [
    AppComponent,
    contactComponent,
    AboutComponent,
    AboutHomeComponent, 
    AboutItemComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ MainService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
