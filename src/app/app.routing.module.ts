import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const usersRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            usersRoutes
        ),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
