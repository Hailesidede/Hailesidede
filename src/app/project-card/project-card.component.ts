import { Component, Input } from '@angular/core';
import { project } from '../_models/project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent  {

  @Input() project = {} as project;

  bsModalRef?: BsModalRef;


  constructor(private modalService : BsModalService){}

  openProjectModal(){

    const modalOptions : ModalOptions = {
      class :"modal-lg",
      initialState: {
        project: this.project
      }

    };

    this.bsModalRef = this.modalService.show(ProjectModalComponent,modalOptions)
  }

 
  
}
