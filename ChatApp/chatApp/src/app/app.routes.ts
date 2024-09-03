import { Routes } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { SignupComponent } from '../signup/signup.component';
import { ChannelsComponent } from '../channels/channels.component';
import { ChatsComponent } from '../chats/chats.component';

export const routes: Routes = [
    {path: 'profile', component:ProfileComponent},
    {path: '', component:LoginComponent},
    {path: 'home', component:HomeComponent},
    {path: 'signup', component:SignupComponent},
    {path: 'channels', component:ChannelsComponent},
    {path: 'chats', component:ChatsComponent}
];