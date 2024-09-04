import { Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { ChannelsComponent } from '../channels/channels.component';
import { ChatsComponent } from '../chats/chats.component';

export const routes: Routes = [
    {path: 'profile', component:ProfileComponent},
    {path: '', component:LoginComponent},
    {path: 'home', component:HomeComponent},
    {path: 'channels', component:ChannelsComponent},
    {path: 'chats', component:ChatsComponent}
];