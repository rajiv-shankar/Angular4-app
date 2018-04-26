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
  posts:Post[]; // 'Post' interface
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    // console.log("constructor ran...")
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
    this.hobbies = ["write", "sing", "dance"];
    this.hello = "hello";

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });  // return an 'observable' that must be subscribed
  }

  onClick() {
    this.name = "Rajiv";
    // this.hobbies.push("New Hobby")
  }

  addHobby(hobby) {
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

  toggleEdit() {
    this.isEdit = !this.isEdit;  // will switch true <-> false
  }

}


// can even be put in another file
interface Address{
  street: string,
  city: string,
  state: string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}
