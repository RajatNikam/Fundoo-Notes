import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { RegistrationComponent } from './components/registration/registration.component'
import { ForgotEmailComponent } from './components/forgot-email/forgot-email.component'
import { ResetPasswordComponent } from './components/reset-password/reset-password.component'
import { DashboardComponent } from './components/Keep/dashboard/dashboard.component'
import { GetNotesComponent } from './components/Keep/get-notes/get-notes.component'
import { DisplayNoteComponent } from './components/Keep/display-note/display-note.component'
import { TakeNotesComponent } from './components/Keep/take-notes/take-notes.component'
import { IconsComponent } from './components/Keep/icons/icons.component'
import { DialogboxComponent } from './components/Keep/dialogbox/dialogbox.component'
import { AuthGuardService } from './services/authguardService/auth-guard.service'
import { AuthGuardGuard } from './authGuard/auth-guard.guard';
import { ArchiveComponent } from './components/Keep/SideNav/archive/archive.component';
import { NotesComponent } from './components/Keep/SideNav/notes/notes.component';
import { TrashComponent } from './components/Keep/SideNav/trash/trash.component';






const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-email', component: ForgotEmailComponent },
  { path: 'resetpassword/:token', component: ResetPasswordComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardGuard],
    children: [
      { path: '', redirectTo: 'get-notes', pathMatch: 'full' },
      { path: 'get-notes', component: GetNotesComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'trash', component: TrashComponent }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
