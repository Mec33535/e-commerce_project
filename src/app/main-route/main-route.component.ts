import { Component } from '@angular/core';
import { ClientSectionComponent } from "../client-section/client-section.component";
import { BookSectionComponent } from "../book-section/book-section.component";
import { AboutSectionComponent } from "../about-section/about-section.component";
import { FoodSectionComponent } from "../food-section/food-section.component";
import { OfferSectionComponent } from "../offer-section/offer-section.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-route',
  standalone: true,
  templateUrl: './main-route.component.html',
  styleUrl: './main-route.component.scss',
  imports: [
    CommonModule,
    ClientSectionComponent,
    BookSectionComponent,
    AboutSectionComponent,
    FoodSectionComponent,
    OfferSectionComponent]
})
export class MainRouteComponent {

}
