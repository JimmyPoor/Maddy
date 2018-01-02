import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const usersRoutes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            usersRoutes,
            { enableTracing: true }
        ),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}