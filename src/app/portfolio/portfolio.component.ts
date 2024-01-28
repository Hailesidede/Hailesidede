import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private titleService : Title,
    private projectService : ProjectsService){
    this.titleService.setTitle('Haile Kesekwa - Portfolio')
  }

  projects ={} as project [];

  isCollapsed : boolean = true;

  typescript : boolean = false;
  angular : boolean = false;
  java : boolean = false;

  sql : boolean = false;

  springboot : boolean = false;
  
  bootstrap : boolean = false;
  filtering : boolean = false;

  
  
    ngOnInit(): void {
    this.projects = this.projectService.getProjects();
   
  }


  filter(){
    let filterTags: Tag[]= [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if(this.java){
      filterTags.push(Tag.JAVA);
    }

    if(this.springboot){
      filterTags.push(Tag.SPRINGBOOT);
    }

    if(this.sql){
      filterTags.push(Tag.SQL);
    }

    if(this.bootstrap){
      filterTags.push(Tag.BOOTSTRAP);
    }
    if(this.angular|| this.bootstrap|| this.springboot|| this.java|| this.sql||this.typescript){
      this.filtering = true;
    }else{
      this.filtering = false;
    }


    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }


  resetFilters(){
    this.typescript = false;
    this.springboot = false;
    this.java = false;
    this.angular = false;
    this.bootstrap = false;
    this.sql = false;
    this.filtering = false;

    this.projects = this.projectService.getProjects();
  }

  
    


  
}
