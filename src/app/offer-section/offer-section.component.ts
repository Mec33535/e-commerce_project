import { CartSvgComponent } from '../cart-svg/cart-svg.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-offer-section',
  standalone: true,
  imports: [CommonModule,
    CartSvgComponent,
    RouterModule],
  templateUrl: './offer-section.component.html',
  styleUrl: './offer-section.component.scss'
})
export class OfferSectionComponent {

  OfferCards = [
    {
      offerId: "1-offer",
      offerPic: "../../assets/o1.jpg",
      offerTitle: "Tasty Thursdays",
      offerDiscount: "20%",

    },
    {
      offerId: "2-offer",
      offerPic: "../../assets/o2.jpg",
      offerTitle: "Pizza Days",
      offerDiscount: "15%",
    }
  ]
}
