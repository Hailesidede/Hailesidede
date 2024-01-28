import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { project } from '../_models/project';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredProjects : project;

  constructor (private titleService : Title,
    private projectService : ProjectsService) { 
    this.titleService.setTitle('Haile Kesekwa - Home')
  }
  
    ngOnInit(): void {
   this.featuredProjects = this.projectService.getProjectById(0);
  }
  
}
