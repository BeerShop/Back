import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: HomeComponent, canActivate: [AuthService] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthService] },
    { path: 'detalhe', component: DetalheComponent, canActivate: [AuthService] },
    { path: 'detalhe/:id', component: DetalheComponent, canActivate: [AuthService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})
export class AppRoutingModule { }
