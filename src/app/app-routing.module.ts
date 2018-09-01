import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { MyComponent } from './main/my/my.component';

import { ErrorComponent } from './error/error.component';

// utils
import { AuthGuard } from './utils/authGuard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'my',
        component: MyComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
