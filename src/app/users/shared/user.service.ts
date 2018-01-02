import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user.model'

@Injectable()
export class UserService implements OnInit {

    users: User[];

    constructor() { 
        this.users = [
            { userId: 1, userName: "Tom" },
            { userId: 2, userName: "Mary" },
            { userId: 3, userName: "Jimmy" }
        ];
    }

    ngOnInit(): void {
        // this.http.post/get('',body,{headers:'HttpHeaders',params:'HttpParams').subscribe(data => {
        
        // })
    }
}
