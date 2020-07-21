import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { takeWhile } from 'rxjs/operators';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'nb-auth',
  template: `
    <nb-layout>
      <nb-layout-column>
              <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>
  `,
})

export class AuthComponent implements OnDestroy {

  private alive = true;

  subscription: any;

  authenticated: boolean = false;
  token: string = '';

  // showcase of how to use the onAuthenticationChange method
  constructor(protected auth: NbAuthService, protected location: Location) {

    this.subscription = auth.onAuthenticationChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe((authenticated: boolean) => {
        this.authenticated = authenticated;
      });
  }

  back() {
    this.location.back();
    return false;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
