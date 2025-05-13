import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  title = 'Obada Ibrahim';
  subtitle = 'Frontend & Mobile Developer';
  tagline = 'Crafting scalable, user-centric applications with Angular & Flutter';
}
