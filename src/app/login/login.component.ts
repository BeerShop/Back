import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

fazerLogin(): void{
    this.loginService.loginIn(this.usuario).subscribe(data => {
      if(data['_body']){
        let ret = JSON.parse(data['_body']);
        this.authService.setToken(ret.token);
        this.authService.loginIn = true;
        this.router.navigate(['home']);
      }
    });
}
}
