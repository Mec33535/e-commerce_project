import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartSvgComponent } from '../cart-svg/cart-svg.component';
import { RouterLinkActive, RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-hero-area',
  standalone: true,
  imports: [
    CarouselModule,
    CommonModule,
    CartSvgComponent,
    RouterModule,
    RouterLinkActive
  ],
  templateUrl: './hero-area.component.html',
  styleUrl: './hero-area.component.scss',
})
export class HeroAreaComponent {
  constructor(private router: Router) { }

  isThisRouterIndex(): boolean {
    return this.router.url.includes('/index');
  }

  customOptions: OwlOptions = {
    autoplay: true,
    autoHeight: false,
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    lazyLoad: false,
    autoplayHoverPause: true,
    items: 1,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },

    // navText: [
    //   '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    //   '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    // ],
    dotsSpeed: 1000,
    // dotsData: {
    //   value: 1;
    // },

  };


  sliderStore: Array<any> = [
    {
      id: "1-slide",
      classNames: "col-md-7 ,col-lg-6",
      hText: "Fast Food Restourant",
      pText: `
      Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad 
      mollitialaborum quamquisquam esse error unde. Tempora ex doloremque, labore, 
      sunt repellat dolore, iste magni quosnihil ducimus libero ipsam`,
      btnText: "Order Now",
      slidesBtnUrl: "#"
    },
    {
      id: "2-slide",
      classNames: "col-md-7 ,col-lg-6",
      hText: "Fast Food Restourant",
      pText: `
      Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad 
      mollitialaborum quamquisquam esse error unde. Tempora ex doloremque, labore, 
      sunt repellat dolore, iste magni quosnihil ducimus libero ipsam`,
      btnText: "Order Now",
      slidesBtnUrl: "#"
    },
    {
      id: "3-slide",
      classNames: "col-md-7 ,col-lg-6",
      hText: "Fast Food Restourant",
      pText: `
      Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad 
      mollitialaborum quamquisquam esse error unde. Tempora ex doloremque, labore, 
      sunt repellat dolore, iste magni quosnihil ducimus libero ipsam`,
      btnText: "Order Now",
      slidesBtnUrl: "#"
    },
    {
      id: "4-slide",
      classNames: "col-md-7 ,col-lg-6",
      hText: "Fast Food Restourant",
      pText: `
      Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad 
      mollitialaborum quamquisquam esse error unde. Tempora ex doloremque, labore, 
      sunt repellat dolore, iste magni quosnihil ducimus libero ipsam`,
      btnText: "Order Now",
      slidesBtnUrl: "#"
    },
    {
      id: "5-slide",
      classNames: "col-md-7 ,col-lg-6",
      hText: "Fast Food Restourant",
      pText: `
      Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad 
      mollitialaborum quamquisquam esse error unde. Tempora ex doloremque, labore, 
      sunt repellat dolore, iste magni quosnihil ducimus libero ipsam`,
      btnText: "Order Now",
      slidesBtnUrl: "#"
    }
  ]

}
