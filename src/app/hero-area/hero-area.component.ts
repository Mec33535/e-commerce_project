import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hero-area',
  standalone: true,
  imports: [
    CarouselModule,
    CommonModule,
  ],
  templateUrl: './hero-area.component.html',
  styleUrl: './hero-area.component.scss'
})
export class HeroAreaComponent {
  // console.log(document.querySelector('link[src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.css"]'));
  // const owlCarousel = document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"]');
  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    lazyLoad: false,
    // navText: [],
    autoplay: false,
    autoplayHoverPause: true,

    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    dotsSpeed: 1000,
    // dotsData: {
    //   value: 1;
    // },
    responsive: {
      0: {
        items: 1
      },
      // 768: {
      //   items: 1
      // },
      // 1000: {
      //   items: 1
      // }
    }
  };

  sliderStore: Array<any> = [
    {
      id: "customCarousel1",
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
      id: "customCarousel1",
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
      id: "customCarousel1",
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
      id: "customCarousel1",
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
      id: "customCarousel1",
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
  currentSlide: number = 0;
  onSlideChange(event: any) {
    this.currentSlide = event.currentSlide;
  }


}
