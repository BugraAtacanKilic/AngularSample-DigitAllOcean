import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { OfficersService } from '../services/officers/officers.service';
import { OfficerMachine } from '../shared/models/OfficerMac.hine';

@Component({
  selector: 'app-card-detail-mach',
  templateUrl: './card-detail-mach.component.html',
  styleUrls: ['./card-detail-mach.component.css']
})
export class CardDetailMachComponent implements OnInit {

  officerMac! : OfficerMachine;
  constructor(private activatedRoute:ActivatedRoute,private officerService:OfficersService) {
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.officerMac=officerService.getOfficerMachById(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
