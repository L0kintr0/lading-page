import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterLink, RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './components/shared/shared.module';
import { ProductsComponent } from './components/products/products.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HomeComponent,SharedModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username = "slashmas"
  isLogged = false
}
