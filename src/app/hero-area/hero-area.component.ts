import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartSvgComponent } from '../cart-svg/cart-svg.component';
// import { trigger } from '@angular/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RouterModule, Routes } from '@angular/router';
// import {NgbCarousel}



@Component({
  selector: 'app-hero-area',
  standalone: true,
  imports: [
    CarouselModule,
    CommonModule,
    CartSvgComponent,
    RouterModule,

  ],
  templateUrl: './hero-area.component.html',
  styleUrl: './hero-area.component.scss',
  animations: [
    trigger('autoHeight', [
      state('nulled', style({ height: 0 })),
      state('full', style({ height: '*' })),
      transition('full => nulled', [
        style({ height: '*' }),
        animate('700ms 350ms')
      ]),
      transition('nulled => full', [
        style({ height: 0 }),
        animate(350)
      ]),
    ])
  ]
})
export class HeroAreaComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("merhaba")
    // window.addEventListener("resize", () => {
    // Pencerenin genişliğini ve yüksekliğini güncelleyin
    // const width = window.innerWidth;
    // const height = window.innerHeight;

    // Kütüphanelerin ihtiyaç duyduğu bilgileri güncelleyin
    // ...
    // });
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
  // currentSlide: number = 0;
  // onSlideChange(event: any) {
  //   this.currentSlide = event.currentSlide;
  // }


}
