import {
    Component, Input, Output, ChangeDetectionStrategy,
    OnInit, EventEmitter, HostListener, AfterViewInit,
    ContentChild, TemplateRef
} from '@angular/core'

import { User } from '../../users/shared/user.model';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TableComponent {
    // 列数组
    @Input() columns: Array<any> = ['userName', 'userId']
    // 数据源
    @Input() data: Array<any> = [
        { userName: 'kissnana1', userId: 1, },
        { userName: 'kissnana2', userId: 2, },
        { userName: 'kissnana3', userId: 3, },
        { userName: 'kissnana4', userId: 4, },
        { userName: 'kissnana1', userId: 5, },
        { userName: 'kissnana2', userId: 6, },
        { userName: 'kissnana3', userId: 7, },
        { userName: 'kissnana4', userId: 8, },
    ];
    // 每页显示数
    @Input() pageSize: number = 5;
    // 是否显示复选框
    @Input() showCheckbox = true;
    // 是否显示操作列
    @Input() showCommandArea = true;
    // 操作列模板
    @ContentChild('commandTemplate') commandTemplate: TemplateRef<void>;


    getKeys(item) {
        return Object.keys(item);
    }

    // out loaded
    // out loading

}