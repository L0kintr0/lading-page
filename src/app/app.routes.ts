import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './components/shared/shared.module';


export const routes: Routes = [{
   path:"home",component:HomeComponent
}
];
