import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from './forms/login-form/login-form.component';
import {HomepageComponent} from './pages/homepage/homepage.component';

const routes: Routes = [

  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'home', component: HomepageComponent
  },
  {path: '**', redirectTo: '/login'}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
