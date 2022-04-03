import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signin(form: any){
    console.log(form)
  }

  // username = ''
  // password = ''

  // login(){
  //   if(this.username == 'admin' && this.password == '123'){
  //     localStorage.setItem('sessionUser',this.username)
  //     alert("login sucessfull");
  //     this.router.navigateByUrl("/admindash")
  //   }

  //   else {
  //     alert("invalid login")
  //   }
  // }

}
