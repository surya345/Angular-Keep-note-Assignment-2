import { NgModule } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms/forms";
import { MatFormFieldModule  } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from "@angular/material/input";
import { NotesService } from './services/notes.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { RouterModule, Routes } from '@angular/router';
import { RouterService } from './services/router.service';
import { AuthenticationService } from './services/authentication.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [CanActivateRouteGuard] },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [AppComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent ],
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    MatToolbarModule,
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  HttpClientModule,
  MatInputModule,
  DashboardComponent,
  HeaderComponent,
  LoginComponent,
  CanActivateRouteGuard,
  RouterModule,
  RouterService,
  NotesService,
  AuthenticationService,
  MatSidenavModule,
  LayoutModule,
  MatListModule,
  BrowserModule,
  BrowserAnimationsModule,
  MatIconModule
 ],
  providers: [NotesService,
    RouterService,
    AuthenticationService,
    CanActivateRouteGuard ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
