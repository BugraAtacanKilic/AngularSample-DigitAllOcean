import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailMachComponent } from './card-detail-mach/card-detail-mach.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent

  },
  {
    path:'officer/:id',component:CardDetailComponent
  },
  {
     path:'officerMachine/:id',component:CardDetailMachComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
