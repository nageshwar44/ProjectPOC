import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsComponent } from './pages/forms/forms.component';
import { LoginformComponent } from './pages/loginform/loginform.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LinechartComponent } from './linechart/linechart.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityComponent } from './activity/activity.component';
import { BudgetReportComponent } from './budget-report/budget-report.component';
import { RecentsalesComponent } from './recentsales/recentsales.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenubarComponent,
    FooterComponent,
    CardsComponent,
    ProfileComponent,
    FormsComponent,
    LoginformComponent,
    ErrorpageComponent,
    ContactComponent,
    LinechartComponent,
    DashboardComponent,
    ActivityComponent,
    BudgetReportComponent,
    RecentsalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
