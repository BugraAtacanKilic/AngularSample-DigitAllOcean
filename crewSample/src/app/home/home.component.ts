import { Component, OnInit } from '@angular/core';
import { OfficersService } from '../services/officers/officers.service';
import { Officer } from '../shared/models/Officer';
import { OfficerMachine } from '../shared/models/OfficerMac.hine';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  closeResults?:any;
  lang?:string;
  supportLanguages=['en','fr','po'];


  officers:Officer[]=[];
  officerMachines:OfficerMachine[]=[];

  constructor(private officerService:OfficersService,private modalService:NgbModal,public translate:TranslateService) {
    translate.addLangs(this.supportLanguages);
    translate.setDefaultLang('en')
  }
  switchLanguage(lang:string){
    this.translate.use(lang)
  }

  ngOnInit(): void {
    this.officers=this.officerService.getAll();
    this.officerMachines=this.officerService.getAllMachine();

  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResults = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResults = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }



}
