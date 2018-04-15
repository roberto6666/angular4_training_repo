import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginService implements CanActivate {
  loggedIn: any;

  constructor(private router: Router) {}

  canActivate (destination: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('loggggin');
    console.log(destination.component.name);
    console.log(destination);
    console.log(state);
  // A call to the actual login service would go here
  // For now we'll just randomly return true or false
  let loggedIn: boolean = Math.random() < 0.5;
  this.loggedIn = loggedIn;
  console.log(`random is ${this.loggedIn}`);
  if (!loggedIn) {
  alert ('You\'re not logged in and will be redirected to Login page');
  this.router.navigate(['/login']);
    }
  return loggedIn;
  }

}
