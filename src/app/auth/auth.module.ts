import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login/login.component'
import { AuthRoutingModule } from './auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './auth.component';
import {
    NbActionsModule,
    NbLayoutModule,
    NbMenuModule,
    NbSearchModule,
    NbSidebarModule,
    NbUserModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbThemeModule,
    NbPopoverModule,
    NbCardModule,
    NbListModule,
    NbTableModule,
    NbTabsetModule,
    NbAlertModule,
    NbCheckboxModule,
    NbInputModule,
} from '@nebular/theme';
import { NbSecurityModule } from '@nebular/security';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAuthModule } from '@nebular/auth';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const NB_MODULES = [
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbAuthModule,
];


@NgModule({
    declarations: [
        LoginPageComponent,
        AuthComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        AuthRoutingModule,
        ...NB_MODULES

    ]
})
export class AuthModule { }
