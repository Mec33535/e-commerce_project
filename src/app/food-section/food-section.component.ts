
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartSvgComponent } from '../cart-svg/cart-svg.component';
import { IsotopeOptions } from 'isotope-layout';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-food-section',
  standalone: true,
  imports: [
    CommonModule,
    CartSvgComponent,
    RouterLink
  ],
  templateUrl: './food-section.component.html',
  styleUrl: './food-section.component.scss'
})
export class FoodSectionComponent {

  // filterFunction(item: any): boolean {
  //   console.log("hey")
  //   return item.title === "Angular";
  // }

  // IsotopeModule: IsotopeOptions = {
  //   // const data = this.
  //   filter: 'data',
  //   itemSelector: 'item-selector',
  //   layoutMode: 'cellsByRow',
  //   sortBy: '3s',
  // }

  FilterMenu = [
    {
      id: 'filter-1',
      dataFilter: "*",
      filterText: "All",
    },
    {
      id: 'filter-2',
      dataFilter: ".burger",
      filterText: "Buger",
    },
    {
      id: 'filter-3',
      dataFilter: ".pizza",
      filterText: "Pizza",
    },
    {
      id: 'filter-4',
      dataFilter: ".pasta",
      filterText: "Pasta",
    },
    {
      id: 'filter-5',
      dataFilter: ".fries",
      filterText: "Fries",
    }
  ]
  MenuCards = [
    {
      id: 'menu-card-1',
      menuImg: '../assets/f1.png',
      menuTitle: "Delicious Pizza",
      menuText: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus
      sed eaque`,
      menuPrice: '20$'
    }, {
      id: 'menu-card-2',
      menuImg: "../assets/f2.png",
      menuTitle: "Tasty Burger",
      menuText: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus
      sed eaque`,
      menuPrice: '15$'
    }, {
      id: 'menu-card-3',
      menuImg: "../assets/f3.png",
      menuTitle: "Delicious Pizza",
      menuText: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus
      sed eaque`,
      menuPrice: '17$'
    }, {
      id: 'menu-card-4',
      menuImg: "../assets/f4.png",
      menuTitle: "Delicious Pasta",
      menuText: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus
      sed eaque`,
      menuPrice: '18$'
    }, {
      id: 'menu-card-5',
      menuImg: "../assets/f5.png",
      menuTitle: "French Fries",
      menuText: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus
      sed eaque`,
      menuPrice: '10$'
    }, {
      id: 'menu-card-6',
      menuImg: "../assets/f6.png",
      menuTitle: "Delicious Pizza",
      menuText: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus
      sed eaque`,
      menuPrice: '15$'
    }, {
      id: 'menu-card-7',
      menuImg: "../assets/f7.png",
      menuTitle: "Tasty Burger",
      menuText: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus
      sed eaque`,
      menuPrice: '12$'
    }, {
      id: 'menu-card-8',
      menuImg: "../assets/f8.png",
      menuTitle: "Tasty Burger",
      menuText: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus
      sed eaque`,
      menuPrice: '14$'
    }, {
      id: 'menu-card-9',
      menuImg: "../assets/f9.png",
      menuTitle: "Delicious Pasta",
      menuText: `Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus
      sed eaque`,
      menuPrice: '10$'
    },
  ]

}
