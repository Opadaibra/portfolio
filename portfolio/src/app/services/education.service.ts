import { Injectable } from '@angular/core';
import { Education, Language } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  getEducation(): Education {
    return {
      degree: "Bachelor's Degree in Information Technology Engineering",
      institution: "Damascus University, Syria",
      date: "2023"
    };
  }

  getLanguages(): Language[] {
    return [
      {
        name: "Arabic",
        level: "Native",
        proficiency: 100
      },
      {
        name: "English",
        level: "Professional Working Proficiency",
        proficiency: 80
      }
    ];
  }
}