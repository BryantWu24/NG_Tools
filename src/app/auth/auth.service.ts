import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    public redirectUrl = "/auth/login";

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (sessionStorage.getItem('Identity')) { return true } else {
            // 導回登入頁面
            this.router.navigate(['/auth/login']);
            return false;
        }

    }
}