import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }
  public doRegistration(user:any){

    return this.http.post("http://localhost:8080/register",user,{responseType:'text' as'json'});

   

  }

  public getUsers(){

    return this.http.get("http://localhost:8080/getAllUsers");

  }

  public getUserByEmail(email:String){

    return this.http.get("http://localhost:8080/findUser/"+email)

  }

  public deleteUser(id:number){

    return this.http.delete("http://localhost:8080/cancel/"+id);

  }
}
