import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: MainMenuComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
