import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-client-section',
  standalone: true,
  imports: [CommonModule,
    CarouselModule],
  templateUrl: './client-section.component.html',
  styleUrl: './client-section.component.scss'
})
export class ClientSectionComponent {

  clients: Array<any> = [
    {
      clientId: "1-clien",
      clientLorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam",
      clientName: "Melissa",
      clientTitle: "Title-1",
      clientPic: "../../assets/client1.jpg",
    },
    {
      clientId: "2-clien",
      clientLorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam",
      clientName: "john",
      clientTitle: "Title-2",
      clientPic: "../../assets/client2.jpg",
    },
    {
      clientId: "3-clien",
      clientLorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam",
      clientName: "john",
      clientTitle: "Title-3",
      clientPic: "../../assets/client2.jpg",
    }
  ];
  customOptionsClient: OwlOptions = {
    loop: true,
    margin: 0,
    dots: false,
    // navText: [],
    autoplay: false,
    autoplayHoverPause: false,
    autoWidth: true,
    navText: [
      '<i class="fa-solid fa-angles-left"></i>',
      '<i class="fa-solid fa-angles-right"></i>',
    ],
    autoHeight: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 2
      }
    },
    nav: true,
  }


}
