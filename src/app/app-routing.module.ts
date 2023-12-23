import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './authGuard/auth-guard.guard';
import { ArchiveComponent } from './components/Keep/SideNav/archive/archive.component';
import { NotesComponent } from './components/Keep/SideNav/notes/notes.component';
import { TrashComponent } from './components/Keep/SideNav/trash/trash.component';
import { DashboardComponent } from './components/Keep/dashboard/dashboard.component';
import { GetNotesComponent } from './components/Keep/get-notes/get-notes.component';
import { ForgotEmailComponent } from './components/forgot-email/forgot-email.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-email', component: ForgotEmailComponent },
  { path: 'resetpassword/:token', component: ResetPasswordComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardGuard],
    children: [
      { path: '', redirectTo: 'get-notes', pathMatch: 'full' },
      { path: 'get-notes', component: GetNotesComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'trash', component: TrashComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
