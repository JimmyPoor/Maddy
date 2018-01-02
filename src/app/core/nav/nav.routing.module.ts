import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from '../../users/user-list/user-list.component';
import { HomeComponent } from '../../home/home.component';

const usersRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UserListComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(
            usersRoutes
        ),
    ],
    exports: [RouterModule]
})

export class NavRoutingModule {}
