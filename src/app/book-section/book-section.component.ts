import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-section',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    RouterLink],
  templateUrl: './book-section.component.html',
  styleUrl: './book-section.component.scss'
})
export class BookSectionComponent {

}
