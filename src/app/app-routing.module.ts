import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { FormsComponent } from './pages/forms/forms.component';
import { LoginformComponent } from './pages/loginform/loginform.component';
import { LinechartComponent } from './linechart/linechart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {
    component:ProfileComponent,
    path:'profile'
  },
  {
    component:ContactComponent,
    path:'contact'
  },
  {
    component:ErrorpageComponent,
    path:'error'
  },
  {
    component:FormsComponent,
    path:'register'
  },
  {
    component:LoginformComponent,
    path:'login'
  },
  {
    component:LinechartComponent,
    path:'chart'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'card',
    component:CardsComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
