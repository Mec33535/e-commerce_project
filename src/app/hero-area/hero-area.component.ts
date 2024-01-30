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
    RouterLinkActive,
  ],
  templateUrl: './hero-area.component.html',
  styleUrl: './hero-area.component.scss',
})
export class HeroAreaComponent {

  constructor(private router: Router) { }

  isThisRouterIndex(): boolean {
    return this.router.url.includes('/index');
  }

  navbarSection: {
    navbarItemClass: string;
    navItems: Array<any>;
  } = {
      navbarItemClass: 'nav-item',

      navItems: [
        {
          routerLinks: "/index",
          itemsTitle: "Home"
        },
        {
          routerLinks: "/menu",
          itemsTitle: "Menu"
        },
        {
          routerLinks: "/about",
          itemsTitle: "About"
        },
        {
          routerLinks: "/book-table",
          itemsTitle: "Book Table"
        }],

    }


  owlCustomOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    dots: true,
    lazyLoad: false,
    dotsSpeed: 1000,
    smartSpeed: 800,
    dotsData: true,
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

  };

  HeroSliders: {
    classNames: string,
    htext: string,
    btnText: string,
    slidesBtnUrl: string,
    sliderStore: Array<any>,
  } = {
      classNames: "col-md-7 ,col-lg-6",
      htext: "Fast Food Restourant",
      btnText: "Order Now",
      slidesBtnUrl: "#",

      sliderStore: [
        {
          id: "1-slide",
          pText: `
      Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad 
      mollitialaborum quamquisquam esse error unde. Tempora ex doloremque, labore, 
      sunt repellat dolore, iste magni quosnihil ducimus libero ipsam`,
        },
        {
          id: "2-slide",
          pText: `
      Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad 
      mollitialaborum quamquisquam esse error unde. Tempora ex doloremque, labore, 
      sunt repellat dolore, iste magni quosnihil ducimus libero ipsam`,
        },
        {
          id: "3-slide",

          pText: `
      Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad 
      mollitialaborum quamquisquam esse error unde. Tempora ex doloremque, labore, 
      sunt repellat dolore, iste magni quosnihil ducimus libero ipsam`,
        },
      ],
    }

}
