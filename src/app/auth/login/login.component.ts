import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Util } from '../../@core/utils/util'

@Component({
    selector: 'jb-login',
    templateUrl: './login.component.html'
})

export class LoginPageComponent implements OnInit {

    public accountInput;
    public passwordInput;
    public Util = new Util();
    public errorMessage: string;
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    ngOnInit(): void { }

    login(id) {
        if (id == 'Member') {
            const body = {
                "userName": this.accountInput,
                "passWord": this.passwordInput
            }
            this.http.post<any>(this.Util.apiUrl + 'auth/getToken', body).subscribe((res) => {
                if (res.status == -1)
                    this.errorMessage = res.data;
                else {
                    this.errorMessage = null;
                    this.router.navigate(['/pages/chat/index']);
                }
            })
        } else {
            sessionStorage.setItem('Identity', 'Guest');
            this.router.navigate(['/pages/analytics/d3']);
        }
    }
}