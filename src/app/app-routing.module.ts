import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth/auth.service';

export const routes: Routes = [
    {
        path: 'pages',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/pages.module')
            .then(m => m.PagesModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module')
            .then(m => m.AuthModule),
    },
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
    useHash: false,
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {
}
