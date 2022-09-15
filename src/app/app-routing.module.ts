import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AddToDataBaseComponent} from "./add-to-data-base/add-to-data-base.component";
import {SearchInDataBaseComponent} from "./search-in-data-base/search-in-data-base.component";
import {UpdateDataComponent} from "./update-data/update-data.component";
import {DeleteDataComponent} from "./delete-data/delete-data.component";


const routes: Routes = [

  { path:'',component:LoginComponent },
  { path: 'home', component: HomeComponent },
  {path:'add',component:AddToDataBaseComponent},
  {path:'search',component:SearchInDataBaseComponent},
  {path:'update',component:UpdateDataComponent},
  {path:'delete',component:DeleteDataComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
