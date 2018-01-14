import {
    Component, ContentChild, AfterViewInit, TemplateRef,
    EventEmitter, Output
} from '@angular/core';

@Component({
    selector: 'app-list',
    template: ` <ul class="list-group">
                    <li class="list-group-item" *ngfor="let item in data">
                      <ng-template *ngTemplateOutlet="itemTemplate; context: item"></ng-template>
                    </li>
                </ul> 
                <ngb-pagination 
                  [(collectionSize)]="pageEvent.total"
                  [(pageSize)]="pageEvent.pageSize"
                  [(page)]="pageEvent.current" 
                  [boundaryLinks]="true" 
                  [directionLinks]="true"
                  (pageChange)="pageChange(pageEvent)">
                </ngb-pagination>
                `
})

export class ListComponent {
    // 列表数据
    data: Array<any>;

    // 列表模板
    @ContentChild('itemTemplate')
    itemTemplate: TemplateRef<any>;

    // 分页事件
    pageEvent: PageEvent = {
        pageSize: 5,
        current: 0,
        total: 0
    };

    @Output()
    bindSourceRequest: EventEmitter<ListComponent>;

    pageChange(pageEvent) {
        this.pageChange = pageEvent;
        this.bindSourceRequest.emit(this);
    }

    constructor() {
        this.bindSourceRequest = new EventEmitter();
    }

}

export interface PageEvent {
    total: number;
    pageSize: number;
    current: number;
}

