import { Injectable } from '@angular/core';
import { SkillCategory } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  getSkills(): SkillCategory[] {
    return [
      {
        name: 'Frontend Development',
        skills: [
          { name: 'Angular', level: 90 },
          { name: 'TypeScript', level: 85 },
          { name: 'HTML5/CSS3', level: 95 },
          { name: 'JavaScript', level: 80 },
          { name: 'Responsive Design', level: 85 }
        ]
      },
      {
        name: 'Mobile Development',
        skills: [
          { name: 'Flutter', level: 85 },
          { name: 'Dart', level: 80 },
          { name: 'GetX', level: 75 },
          { name: 'Firebase', level: 70 }
        ]
      }
      // Add more categories as needed
    ];
  }
}