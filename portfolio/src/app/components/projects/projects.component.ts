import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  activeFilter: string = 'all';
  filters=[];
  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
    this.filteredProjects = [...this.projects];
  }

  filterProjects(category: string) {
    this.activeFilter = category;
    if (category === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(
        project => project.categories.includes(category)
      );
    }
  }
}
