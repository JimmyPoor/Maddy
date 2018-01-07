import {
    Component, Input, Output, ChangeDetectionStrategy,
    OnInit, EventEmitter, HostListener, AfterViewInit,
    ContentChild, TemplateRef, ViewContainerRef, QueryList,
    ContentChildren, AfterContentInit, ViewChild
} from '@angular/core';

import { User } from '../../users/shared/user.model';
import { ColumnComponent } from './table.column.Component';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TableComponent implements AfterContentInit {
    // 列数组
    @Input() columnTitles: Array<string> = ['col1', 'col2'];
    // 数据源
    @Input() data: Array<any> = [
        { 'col1': 'data-1', 'col2': 'data-1' },
        { 'col1': 'data-2', 'col2': 'data-1' },
        { 'col1': 'data-3', 'col2': 'data-1' },
        { 'col1': 'data-4', 'col2': 'data-1' },
        { 'col1': 'data-5', 'col2': 'data-1' }
    ];
    // 每页显示数
    @Input() pageSize = 5;
    // 是否显示操作列
    @Input() showCommandColumn = false;
    // 是否显示操作列
    @Input() showCustomerHeader = false;
    // 操作列标题
    @Input() commandTitle = 'command';
    // 操作列模板
    @ContentChild('commandTemplate') commandTemplate: TemplateRef<void>;
    // header模板
    @ContentChild('headerTemplate') headerTemplate: TemplateRef<void>;
    // 主题
    @Input() tableTheme = 'table-theme-chocolate';
    // 列模板
    @ContentChildren(ColumnComponent) columnTemplate: QueryList<ColumnComponent>;
    // 绑定数据源
    @Output() bindSourceRequest: EventEmitter<TableComponent>;

    isNoData = isNullOrUndefined(this.data) || this.data.length <= 0;

    ngAfterContentInit() {
        this.bindColumnTemplate();
    }

    private bindSource() {
        this.bindSourceRequest.emit(this);
    }

    private bindColumnTemplate() {
        if (isNullOrUndefined(this.data)) {
            return;
        }
        let temp = null;
        for (let i = 0; i < this.columnTemplate.length; i++) {
            temp = this.columnTemplate.find((x, k) => i === k);
            if (isNullOrUndefined(temp)) {
                continue;
            }
            for (let j = 0; j < this.data.length; j++) {
                this.data[j][temp.columnName] = temp.content;
            }
        }
    }

    private getKeys(item) {
        return Object.keys(item);
    }

    // TODO:
    // out loaded
    // out loading
    // out rowDataBinding
}


