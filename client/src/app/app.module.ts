import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {
  LucideAngularModule,
  Send,
  Instagram,
  Youtube,
  X,
  LogOut,
} from 'lucide-angular';
import { MessageComponent } from './pages/message/message.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart'
import { MessageSidebarComponent } from './pages/message/message-sidebar/message-sidebar.component';
import { InstagramComponent } from './pages/instagram/instagram.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';
import { TwitterComponent } from './pages/twitter/twitter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    MessageComponent,
    MessageSidebarComponent,
    InstagramComponent,
    YoutubeComponent,
    TwitterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PickerModule,
    LucideAngularModule.pick({ Send, Instagram, Youtube, X, LogOut }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
