import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NotImplementedComponent } from './not-implemented-yet/not-implemented.component';
import { PatientComponent } from './patient/patient.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: MainMenuComponent,
    children: [{
      path: ':idUser',
      component: MainMenuComponent
    }]
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'patient',
    component: PatientComponent,
    children: [{
      path: ':idUser',
      component: PatientComponent
    }]
  },

  {
    path: 'not-implemented-yet',
    component: NotImplementedComponent,
    children: [{
      path: ':idUser',
      component: NotImplementedComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
