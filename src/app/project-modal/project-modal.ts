import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { project } from '../_models/project';


@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {

  project : project;

  constructor(public bsModalRef : BsModalRef) {
    
  }
  
    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
