import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  // properties have type associated with them
  name:string;
  age:number;
  email:string;
  address:Address;
  // {
  //   street:string,
  //   city:string,
  //   state:string
  // }
  // array of strings:
  hobbies:string[];
  hello:any;

  constructor(private dataService:DataService) {

  }) {
    // console.log("constructor ran")
  }

  // lifecycle hook
  ngOnInit() {
    this.name = "John";
    this.age = 30;
    this.email = "test@test.com";
    this.address = {
      street: "50 Main St",
      city: "Boston",
      state: "MA"
    }
    this.hobbies = ["write", "sing", "dance"]
  }

  onClick(){
    // console.log("HELLO")
    this.name = "Rajiv";
    // this.hobbies.push("New Hobby")
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1)
      };

    }
  }

}

// can even be put in another file
interface Address{
  street: string,
  city: string,
  state: string
}
