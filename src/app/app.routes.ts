import { Routes } from '@angular/router';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { PhieuComponent } from './pages/phieu/phieu.component';
import { guestGuard } from './core/guards/guest.guard';
import { authGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [guestGuard],
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: '',
    component: MasterComponent,
    canActivate: [authGuard],
    children: [{ path: 'phieu', component: PhieuComponent }],
  },
  {
    path: 'register',
    component: DefaultComponent,
    canActivate: [guestGuard],
    children: [{ path: 'register', component: RegisterComponent }],
  },
];
