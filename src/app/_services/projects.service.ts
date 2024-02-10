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
          name:'E-Commerce Application',
          summary:'A Fully functinonal Ecommerce application designed to smoothen the process of ecommerce transaction intergrated with razor pay payment system when making an order, diplay of product details on ability of creating a cart and orderslist for user experience ',
          description:' Imagine stepping into a seamless and enchanting digital marketplace, where every click is a journey into a world of possibilities. Welcome to our meticulously crafted eCommerce system, a symphony of innovation and convenience that transforms online shopping into an immersive and delightful experience',
          projectLink:'https://github.com/Hailesidede/E-commerce-UI',
          tags: [Tag.ANGULAR,Tag.BOOTSTRAP,Tag.JAVA,Tag.TYPESCRIPT,Tag.SQL],
          pictures:["/assets/Ecomm-adminHomePage.png","/assets/ecom-viewProductPage.png","/assets/ecomm-adminProductDetails Page.png","/assets/eccomm-adminAddProductPage.png","/assets/ecomm-cartPage.png","/assets/ecomm-viewOdersPage.png"]
        },
        {
          id: 1,
          name:'Mariba Blog Application',
          summary:'Introducing our innovative blog application, a digital haven for both seasoned writers and aspiring storytellers. Seamlessly blending user-friendly design with powerful features, our platform offers a dynamic space to craft, share, and engage with captivating narratives',
          description:'With an intuitive and aesthetically pleasing interface, users can effortlessly compose and publish their thoughts, accompanied by multimedia elements for a visually enriching experience. Beyond personal expression, our blog application fosters a vibrant community, where readers can connect, comment, and discover a diverse range of voices. Robust features such as customizable themes, easy content categorization, and social media integration empower users to tailor their digital presence. Whether youre an avid blogger seeking a professional outlet or a casual reader exploring new perspectives, our blog application redefines the art of online storytelling, creating a virtual realm where creativity knows no bounds.',
          projectLink:'https://github.com/Hailesidede/Mariba-stories--blog-application',
          tags: [Tag.ANGULAR,Tag.SPRINGBOOT,Tag.BOOTSTRAP,Tag.JAVA],
          pictures:["/assets/blogApp-adminHomePage.png","/assets/blogApp-viewPostpage.png","/assets/blogAppCreatePostPage.png","/assets/blogAppLoginPage.png"]
        },{
          id: 3,
          name:'Enterprise Resourse Planning system',
          summary:'Our ERP (Enterprise Resource Planning) system stands as the backbone of organizational efficiency, offering a comprehensive solution that seamlessly integrates diverse business processes into a unified platform. From finance and human resources to supply chain management and customer relationship, our ERP system streamlines operations by providing real-time data and insights.',
          description:'Its modular architecture allows for a tailored approach, adapting to the unique needs of each department while ensuring cross-functional collaboration. With features such as centralized data storage, automated workflows, and robust reporting tools, our ERP system enhances decision-making processes, accelerates task execution, and optimizes resource allocation. In essence, it transforms complex business operations into a synchronized symphony, fostering agility, transparency, and overall enterprise excellence.',
          projectLink:'www.google.com',
          tags: [Tag.BOOTSTRAP, Tag.TYPESCRIPT,Tag.ANGULAR,Tag.SPRINGBOOT,Tag.JAVA],
          pictures:["/assets/image_2023_11_08T11_28_38_991Z.png","/assets/image_2023_11_14T13_43_46_529Z.png","/assets/image_2023_11_15T06_04_35_929Z.png","/assets/image_2023_11_17T10_09_08_280Z.png","/assets/Screenshot 2023-11-09 104707.png","/assets/Screenshot 2023-11-09 124847.png"]
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
