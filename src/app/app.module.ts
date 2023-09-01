import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { MeetingComponent } from './meeting/meeting.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewClientComponent } from './view-client/view-client.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';
const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'meeting',component:MeetingComponent},
  {path:'ViewClient',component:ViewClientComponent},
  {path:'ViewMeeting',component:ViewMeetingComponent}  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    MeetingComponent,
    ViewClientComponent,
    ViewMeetingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
