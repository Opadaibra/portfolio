import { Component } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { ExperienceService } from '../../services/experience.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) {
    this.experiences = this.experienceService.getExperiences();
  }
}
