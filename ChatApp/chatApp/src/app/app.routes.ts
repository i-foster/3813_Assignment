import { Routes } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { SignupComponent } from '../signup/signup.component';

export const routes: Routes = [
    {path: '', component:WelcomeComponent},
    {path: 'profile', component:ProfileComponent},
    {path: 'login', component:LoginComponent},
    {path: 'home', component:HomeComponent},
    {path: 'signup', component:SignupComponent}
];