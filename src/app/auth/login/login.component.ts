import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Config } from '../../@core/utils/config';
import { Text } from '../../@core/utils/textResource';

@Component({
    selector: 'jb-login',
    templateUrl: './login.component.html'
})

export class LoginPageComponent implements OnInit {

    public accountInput;
    public passwordInput;
    public errorMessage: string = "";
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    ngOnInit(): void { }

    login(id: string) {
        if (id == 'Member') {

            if ((this.accountInput == "" || this.accountInput == undefined) && (this.passwordInput == "" || this.passwordInput == undefined))
                this.errorMessage = Text.erMsg_Ac_Pwd;
            else {
                if (this.accountInput == "" || this.accountInput == undefined)
                    this.errorMessage = Text.erMsg_Account;

                if (this.passwordInput == "" || this.passwordInput == undefined)
                    this.errorMessage = Text.erMsg_Password;

                if ((this.accountInput != "" && this.accountInput != undefined) && (this.passwordInput != "" && this.passwordInput != undefined))
                    this.loginApi();
            }
        } else {
            sessionStorage.setItem('Identity', 'Guest');
            this.router.navigate(['/pages/analytics/d3']);
        }
    }

    loginApi() {
        const body = {
            "userName": this.accountInput,
            "passWord": this.passwordInput
        };

        this.http.post<any>(Config.API_Root + Config.API_Login, body).subscribe((res) => {
            if (res.status == -1) {
                this.errorMessage = res.data;
            }
            else {
                sessionStorage.setItem('Identity', res.data);
                this.router.navigate(['/pages/chat/index']);
                this.errorMessage = null;
            }
        });
    }
}
