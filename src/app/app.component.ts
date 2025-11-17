import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  isMenuOpen = false;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  downloadCV() {
    // يمكنك إضافة منطق تحميل السيرة الذاتية هنا
    const link = document.createElement('a');
    link.href = 'path-to-your-cv.pdf';
    link.download = 'Obada_Ibrahim_CV.pdf';
    link.click();
  }
}
