import { AboutSectionComponent } from './about-section/about-section.component';
import { Routes } from '@angular/router';
import { FoodSectionComponent } from './food-section/food-section.component';
import { BookSectionComponent } from './book-section/book-section.component';
import { MainRouteComponent } from './main-route/main-route.component';


export const routes: Routes = [
    { path: 'index', component: MainRouteComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },

    { path: 'menu', component: FoodSectionComponent },

    { path: 'about', component: AboutSectionComponent },

    { path: 'book-table', component: BookSectionComponent },
];
