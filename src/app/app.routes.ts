import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './components/shared/shared.module';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


export const routes: Routes = [{
   path:"home",title:"Home",component:HomeComponent
},{
   path:"home/products",title:"Products",component:ProductsComponent
},{
   path:"home/about",title:"About",component:AboutComponent
},{
   path:"home/contacts",title:"Contact",component:ContactComponent
}
];
