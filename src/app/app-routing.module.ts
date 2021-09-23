import { AuthGuard } from './shared/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { UsersPageComponent } from './users/users-page/users-page.component';

const routes: Routes = [
  {
    path: '', component: LoginPageComponent
  },
  {
    path: 'admin', loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
