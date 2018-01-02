import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './users.routing.module';
// all relavant service should be push into providers in module （相关服务绑定到模块的 providers）
import { UserService } from './shared/user.service';

@NgModule({
    declarations: [UserListComponent],
    imports: [
        UserRoutingModule,
        CommonModule
    ],
    providers: [UserService] // 这里注册服务
})

export class UsersModule { }

