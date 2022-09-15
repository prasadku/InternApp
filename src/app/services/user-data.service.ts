import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private  http:HttpClient) { }
  users(){
    return this.http.get("http://10.0.0.114:8080/employee");
  }
  getDataById(id:string){
    return this.http.get("http://10.0.0.114:8080/employee/"+id);
  }
  addData(data:any){
    return this.http.post("http://10.0.0.114:8080/employee",data);

  }
  updateData(data:any){
    return this.http.put("http://10.0.0.114:8080/employee/",data);
    //return this.http.put("http://10.0.0.114:8080/employee",data);

  }
  DeleteData(ids:any){
    return this.http.delete("http://10.0.0.114:8080/employee/"+ids);

  }
}
