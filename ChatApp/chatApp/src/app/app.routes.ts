import { Routes } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    {path: '', component:WelcomeComponent},
    {path: 'profile', component:ProfileComponent},
    {path: 'login', component:LoginComponent},
    {path: 'home', component:HomeComponent}
];