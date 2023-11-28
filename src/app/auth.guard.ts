import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthGuardService implements CanActivate {
  canActivate(): boolean{
    if (localStorage.getItem('token')) {
      return true;
    }
  return false;

  }
};
