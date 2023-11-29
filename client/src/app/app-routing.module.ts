import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './pages/message/message.component';
import { InstagramComponent } from './pages/instagram/instagram.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';
import { TwitterComponent } from './pages/twitter/twitter.component';
const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'message', component: MessageComponent},
  {path: 'instagram', component: InstagramComponent},
  {path: 'youtube', component: YoutubeComponent},
  {path: 'twitter', component: TwitterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
