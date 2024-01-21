import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  AboutSection = {
    aboutImg: "../assets/about-img.png",
    aboutTitle: "We are Feane",
    aboutText: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
    in some form, by injected humour, or randomised words which don't look even slightly believable. If you
    are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
    the middle of text. All`,
    aboutLink: "#",
  }


}
