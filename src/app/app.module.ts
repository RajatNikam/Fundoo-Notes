import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotEmailComponent } from './components/forgot-email/forgot-email.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/Keep/dashboard/dashboard.component'

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout/flex';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { IconsComponent } from './components/Keep/icons/icons.component';
import { DisplayNoteComponent } from './components/Keep/display-note/display-note.component';
import { GetNotesComponent } from './components/Keep/get-notes/get-notes.component';
import { TakeNotesComponent } from './components/Keep/take-notes/take-notes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogboxComponent } from './components/Keep/dialogbox/dialogbox.component';

import { NotesService } from './services/notes.service'
import { AuthGuardService } from './services/authguardService/auth-guard.service';
import { TrashComponent } from './components/Keep/SideNav/trash/trash.component';
import { NotesComponent } from './components/Keep/SideNav/notes/notes.component';
import { ArchiveComponent } from './components/Keep/SideNav/archive/archive.component'
import { RoutesService } from './services/routes.service';





@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotEmailComponent,
    ResetPasswordComponent,
    DashboardComponent,
    IconsComponent,
    DisplayNoteComponent,
    GetNotesComponent,
    TakeNotesComponent,
    DialogboxComponent,
    TrashComponent,
    NotesComponent,
    ArchiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    FlexModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [
    NotesService,
    AuthGuardService,
    RoutesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
