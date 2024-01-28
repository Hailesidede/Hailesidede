import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {


  isWorkExperienceOpen : boolean = false;
  isCertificationOpen : boolean = false;
  isSkillsOpen : boolean = false;
  isEducationOpen : boolean = false;

  constructor(private titleService : Title, private renderer : Renderer2) {
    this.titleService.setTitle('Haile Kesekwa - Resume')
  }
  
    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  downloadPdf(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','/assets/My online resume.txt');
    link.setAttribute('download','My online resume.txt');
    link.click();
    link.remove();

  }
  
}
