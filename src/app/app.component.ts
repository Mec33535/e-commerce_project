import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { OfferSectionComponent } from './offer-section/offer-section.component';
import { FoodSectionComponent } from './food-section/food-section.component';
import { BookSectionComponent } from './book-section/book-section.component';
import { ClientSectionComponent } from './client-section/client-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRegisterService } from './user-register.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    RouterModule,
    HeroAreaComponent,
    OfferSectionComponent,
    FoodSectionComponent,
    AboutSectionComponent,
    BookSectionComponent,
    ClientSectionComponent,
    FooterSectionComponent,
    AdminDashboardComponent,
    HttpClientModule

  ],
  providers: [UserRegisterService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'e-commerce-project';

}
