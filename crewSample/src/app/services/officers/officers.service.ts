import { Injectable } from '@angular/core';
import { Officer } from 'src/app/shared/models/Officer';
import { OfficerMachine } from 'src/app/shared/models/OfficerMac.hine';
@Injectable({
  providedIn: 'root'
})
export class OfficersService {

  constructor() { }

  getOfficerById(id:number):Officer{
    return this.getAll().find(officer=> officer.id ==id)!;

  }

  getOfficerMachById(id:number):OfficerMachine{
    return this.getAllMachine().find(officerMachine=>officerMachine.id==id)!;

  }

  getAll():Officer[]{
    return[
      {
        id:1,
        firstName:"Buğra",
        lastName:"Kılıç",
        nationality:"Turkish",
        title:"Captain",
        certificates:["Captain Certificate-7.07.2002","Captain2 Certificate-7.07.2002"]

      },
      {
        id:2,
        firstName:"Ahmet",
        lastName:"Gündoğdu",
        nationality:"Turkish",
        title:"First Officer",
        certificates:["Captain Certificate-7.07.2002"]

      },
      {
        id:3,
        firstName:"Mehmet",
        lastName:"Emin",
        nationality:"Turkish",
        title:"Second Officer",
        certificates:["Captain Certificate-7.07.2002"]

      },

    ]
  }


  getAllMachine():OfficerMachine[]{
    return[
      {
        id:1,
        firstName:"Buğra",
        lastName:"Kılıç",
        nationality:"Turkish",
        title:"Chief",
        certificates:["Chief Certificate-7.07.2002"]

      },
      {
        id:2,
        firstName:"Ahmet",
        lastName:"Gündoğdu",
        nationality:"Turkish",
        title:"Engineer",
        certificates:["Engineer Certificate-7.07.2002"]

      },
      {
        id:3,
        firstName:"Mehmet",
        lastName:"Emin",
        nationality:"Turkish",
        title:"Mechanicer",
        certificates:["Mechanicer Certificate-7.07.2002"]

      },

    ]
  }





}
