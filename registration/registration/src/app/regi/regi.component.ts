import { Component, OnInit } from '@angular/core';
import {User} from "./user"

@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.css']
})

export class REGIComponent implements OnInit {
  users: User [] = []
  user1: User = new User
  submitIsActive = false
  displayResult = false
  displayErrors = false
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData){
    if(formData.valid){
      console.log("Valid Form")
      console.log(this.user1)
      this.user1 = formData.form.value
      console.log(this.user1.luck)
      if (this.user1.password != this.user1.confirmPW){
        this.displayErrors = true
        return false
      }

      this.displayResult = true

    }else{
      console.log(formData)
      this.displayErrors = true
      this.displayResult =false

      return false
    }
  }
}
