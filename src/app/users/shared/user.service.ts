import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user.model'

@Injectable()
export class UserService implements OnInit {

    users: User[];

    constructor() {
        this.users = [
            { userId: 1, userName: 'Tom', email: '123@456.com', age: 12, city: 'shanghai' },
            { userId: 2, userName: 'Mary', email: '123@456.com', age: 13, city: 'shanghai' },
            { userId: 3, userName: 'Jimmy', email: '123@456.com', age: 14, city: 'shanghai' }
        ];
    }

    ngOnInit(): void {
        // this.http.post/get('',body,{headers:'HttpHeaders',params:'HttpParams').subscribe(data => {

        // })
    }
}
