import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent {
  footerSection: {
    contactUs: any;
    Feane: any;
    openingDays: string;
    openingHours: string;
  } = {

      contactUs: {
        location: "İzmir/Bergama",
        phoneNo: "505 505 5050",
        mail: "osman33535@gmail.com"
      },
      Feane: {
        restourantLorem: "Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with",
        socialMedias: [
          { icon: "fa-brands fa-facebook", Link: "http://www.facebook.com" },
          { icon: "fa-brands fa-twitter", link: "http://www.twitter.com" },
          { icon: "fa-brands fa-linkedin", link: "http://www.linkedin.com" },
          { icon: "fa-brands fa-instagram", link: "http://www.instagram.com" },
          { icon: "fa-brands fa-pinterest", link: "http://www.pinteres.com" },
        ]
      },

      openingDays: "Everyday",
      openingHours: "10.00 Am - 10.00 Pm"

    }



}
