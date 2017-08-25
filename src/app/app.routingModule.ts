import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { contactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AboutHomeComponent, AboutItemComponent } from './about/aboutChildren.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';


const routes: Routes = [
  { path: '', component: contactComponent },
  { path: 'about', 
  component: AboutComponent, 
  // canActivate:[AuthGuard],
  // canActivateChild: [AuthGuard],
  children: [
      { path: '', component: AboutHomeComponent }, // url: aboutt/
      { path: 'item/:id', component: AboutItemComponent  } // url: about/itemm
    ] 
  
}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes),],
  exports: [ RouterModule ],
  declarations: [],
  providers: [AuthGuard, AuthService],
})
export class AppRoutingModule { }

