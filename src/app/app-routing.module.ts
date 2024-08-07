import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const ROUTES : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class AppRoutingModule { }
