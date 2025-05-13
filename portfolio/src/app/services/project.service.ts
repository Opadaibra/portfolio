import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'angular', label: 'Angular' },
    { value: 'flutter', label: 'Flutter' },
    { value: 'game', label: 'Game Dev' }
  ];

  getFilters() {
    return this.filters;
  }

  getProjects(): Project[] {
    return [
      {
        title: 'Triple-L Platform',
        description: 'Responsive web counterpart for Triple-L platform with Angular, optimized for 85% faster load times.',
        image: '../../../assets/images/logo.svg',
        tech: ['Angular', 'TypeScript', 'i18n', 'Responsive Design'],
        categories: ['angular'],
        demoLink: 'https://triple-l.io'
      },
      {
        title: 'Memory Training Game',
        description: 'Interactive memory-training game with Flutter featuring real-time progress tracking.',
        image: '../../../assets/images/memory_logo.svg',
        tech: ['Flutter', 'Dart', 'Firebase'],
        categories: ['flutter'],
        demoLink: 'https://play.google.com/store/apps/details?id=com.example.memorygame'
      },
      {
        title: 'Falcon Sky PMS',
        description: 'Property management system with responsive frontend features for property and user management.',
        image: '../../../assets/images/fs_logo.jpg',
        tech: ['Angular', 'REST APIs', 'UI/UX'],
        categories: ['angular'],
        demoLink: 'https://falconsky.ai'
      },
      // {
      //   title: 'Abo Falah Game',
      //   description: '2D adventure game with C# scripting, tilemaps, and dialogue systems developed with Unity.',
      //   image: 'abo-falah.jpg',
      //   tech: ['Unity', 'C#', '2D Game Dev'],
      //   categories: ['game'],
      //   demoLink: 'https://granada-studio.itch.io/'
      // },
      // {
      //   title: 'TIKTAG App',
      //   description: 'Team synchronization app using NFC cards for efficient information sharing.',
      //   image: 'tiktag.jpg',
      //   tech: ['Flutter', 'Dart', 'Firebase', 'NFC'],
      //   categories: ['flutter'],
      // },
      // {
      //   title: 'AI-Hafez Mobile App',
      //   description: 'Dual Flutter-based apps for maintenance staff and customers to manage service requests.',
      //   image: 'ai-hafez.jpg',
      //   tech: ['Flutter', 'Dart', 'Firebase'],
      //   categories: ['flutter'],
      //   demoLink: 'https://drive.google.com/file/d/1Bw7FBVwpdi4TxRFQ8N-K3yBsYltTAG9l/view'
      // }
    ];
  }
}