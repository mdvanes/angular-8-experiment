import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const DEFAULT_USER = 'Beeblebrox';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser$ = new BehaviorSubject(DEFAULT_USER);
  sharedCurrentUser$ = this.currentUser$.asObservable();

  constructor() { }

  nextUser(user: string) {
    this.currentUser$.next(user)
  }

}