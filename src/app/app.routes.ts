import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { FormBeerComponent } from "./form-beer/form-beer.component";

export const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'home', pathMatch: "full"},
    {path: 'home', component: HomeComponent},
    {path: 'cadastro', component: FormBeerComponent},
    {path: '**', component: ErrorPageComponent}
    
]