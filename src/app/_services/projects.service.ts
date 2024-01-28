import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable} from 'rxjs'
import { project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

    constructor () {

    }


    projects : project [] =[
        {
          id: 0,
          name:'Profile website',
          summary:'A personal website to help keep track of the ongoing projects and activities',
          description:'',
          projectLink:'www.google.com',
          tags: [Tag.ANGULAR,Tag.BOOTSTRAP],
          pictures:["/assets/improvedKpiReport.png","/assets/kpiReport.png"]
        },
        {
          id: 1,
          name:'Spring blog Application',
          summary:'A blog solution for a people with passion in blog activities',
          description:'',
          projectLink:'www.google.com',
          tags: [Tag.ANGULAR,Tag.SPRINGBOOT],
          pictures:["/assets/improvedKpiReport.png","/assets/kpiReport.png"]
        },
        {
          id: 2,
          name:'Ecommerce',
          summary:'An ecommerce platform to aid in the process of ecommerce activites and selling and buying stuff online',
          description:'',
          projectLink:"www.github.com",
          tags: [Tag.ANGULAR,Tag.BOOTSTRAP,Tag.SQL],
          pictures:["/assets/improvedKpiReport.png","/assets/kpiReport.png"]
        },{
          id: 3,
          name:'Erp System',
          summary:'Erp system solutions for banks saccos and instutions for better resource management',
          description:'',
          projectLink:'www.google.com',
          tags: [Tag.BOOTSTRAP, Tag.TYPESCRIPT],
          pictures:["/assets/improvedKpiReport.png","/assets/kpiReport.png"]
        }
      ] 




      getProjects(){
        return this.projects;
      }



      getProjectById( id : number) : project{
        let project = this.projects.find(project =>project.id === id);

        if(project === undefined){
            throw new TypeError("there is no project that matches the provided Id "+id)
        }
        return project;

      }


      getProjectsByFilter(filterTags : Tag[]){

        let filteredProjects : project [] = [];

        this.projects.forEach(function (project){
          let foundAll = true;
          filterTags.forEach(function(filterTags){
            if(project.tags.includes(filterTags)== false){
              foundAll = false;
            }

          });

          if(foundAll){
            filteredProjects.push(project)
          }
        });

        return filteredProjects;

      }


  
}
