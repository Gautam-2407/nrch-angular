import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './pages/message/message.component';


const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'message', component: MessageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
