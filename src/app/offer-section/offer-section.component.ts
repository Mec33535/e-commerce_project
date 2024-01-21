import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-offer-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer-section.component.html',
  styleUrl: './offer-section.component.scss'
})
export class OfferSectionComponent {
  OfferCards = [
    {
      offerPic: "../../assets/o1.jpg",
      offerTitle: "Tasty Thursdays",
      offerDiscount: "20%",
    },
    {
      offerPic: "../../assets/o2.jpg",
      offerTitle: "Pizza Days",
      offerDiscount: "15%",
    }


  ]
}
