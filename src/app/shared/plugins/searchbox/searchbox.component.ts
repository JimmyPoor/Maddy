import { Component, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

Component({
    selector: "app-serachbox",
    template: `<div class="searchbox">  
                    <input class="inputSearch" type="text" #term (keyup)="search(term.value)" placeholder="请输入需要搜索内容"/>  
                    <span  (click)="delSearch()"></span>  
                </div>`
});

export class SearchboxComponent implements OnInit {
    // @Output() searchRequest = new EventEmitter<Object>();  
    // term = new Subject<string>();

    ngOnInit() {
        //   let that=this;
        //   this.searchRequest
    }

    // search(term: string) {
    //     this.term.next(term);   //next 方法触发新的搜索，然后把搜索的事件暴露给外部使用
    // }
}