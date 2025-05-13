import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  getExperiences(): Experience[] {
    return [
      {
        company: 'IQINNOVA',
        role: 'Frontend Developer',
        date: 'July 2024 – Present',
        points: [
          'Developed responsive web counterpart for Triple-L platform using Angular',
          'Optimized frontend performance, reducing load time by 85%',
          'Converted Figma designs to responsive UI with multilingual support'
        ],
        link: 'https://triple-l.io'
      },
      {
        company: 'Dama-Brainz',
        role: 'Frontend Developer',
        date: 'January 2024 – December 2024',
        points: [
          'Contributed to Falcon Sky property management system',
          'Collaborated with backend teams to integrate RESTful APIs'
        ],
        link: 'https://falconsky.ai'
      },
      {
        company: 'Business Analytics Platform',
        role: 'Frontend Developer',
        date: 'September 2022 – June 2023',
        points: [
          ' Designed a real‐time dashboard for advertisement performance analysis, transforming raw data into actionable insights via interactive visualizations.',
          'Integrated backend APIs to ensure efficient data processing and dynamic reporting.'
        ],
      }
      // Add more experiences
    ];
  }
}