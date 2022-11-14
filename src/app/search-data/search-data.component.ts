import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnInit {

 
  user:any

  email:any



  constructor(private service:UserRegistrationService) { }

  public deleteUser(id:number){

    let resp=this.service.deleteUser(id);

    resp.subscribe((data)=>this.user=data);

  }

  public findUserByEmailId(){

    let resp=this.service.getUserByEmail(this.email);

    resp.subscribe((data)=>this.user=data);

  }

  ngOnInit(): void {
  }

}
