import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Education, Language } from '../../models/education.model';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education: Education;
  languages: Language[];

  constructor(private educationService: EducationService) {
    this.education = this.educationService.getEducation();
    this.languages = this.educationService.getLanguages();
  }
}
