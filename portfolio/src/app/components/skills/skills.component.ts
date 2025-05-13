import { Component } from '@angular/core';
import { SkillCategory } from '../../models/skill.model';
import { SkillService } from '../../services/skill.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [];

  constructor(private skillService: SkillService) {
    this.skillCategories = this.skillService.getSkills();
  }
}
