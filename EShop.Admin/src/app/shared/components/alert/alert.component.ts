import { Component, OnInit } from '@angular/core';
import { AlertService } from "./alert.service";
import { slideInOutAnimation } from './slideInOutAnimation';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations:[slideInOutAnimation]
})
export class AlertComponent implements OnInit {
  title: string;
  assertion: string;
  body: string;
  confirmText:string;
  
  constructor(private activeModal: NgbActiveModal){        
  }

  ngOnInit(){
    
  }

  handleCancel(){
      this.activeModal.close(false);
  }

  handleOkay(){        
      this.activeModal.close(true);        
  }
}
