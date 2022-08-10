import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { Officer } from '../shared/models/Officer';
import { OfficersService } from '../services/officers/officers.service';
@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  officer! : Officer;

  constructor(private activatedRoute:ActivatedRoute,private officerService:OfficersService) {
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.officer=officerService.getOfficerById(params['id']);
    })


    }


  ngOnInit(): void {
  }

}
