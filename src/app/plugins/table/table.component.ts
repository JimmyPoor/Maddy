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

export class TableComponent implements AfterContentInit, OnInit {
    // 列数组
    @Input() columnTitles: Array<string>;
    // 数据源
    @Input() data: Array<any>;
    // 数据总数
    @Input() total: number;
    // 每页显示数
    @Input() pageSize = 5;
    page = 0;
    // 是否显示操作列
    @Input() showCommandColumn = false;
    // 是否显示用户头
    @Input() showCustomerHeader = false;
    // 操作列标题
    @Input() commandTitle = '操作';
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
    // 空数据标题
    isNoData: boolean;

    constructor() {
        this.bindSourceRequest = new EventEmitter();
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        this.dataBind();
        this.isNoData = isNullOrUndefined(this.data) || this.data.length <= 0;
    }

    dataBind() {
        if (!isNullOrUndefined(this.bindSourceRequest)) {
            this.bindSourceRequest.emit(this);
            this.bindColumnTemplate();
        }
    }

    private pageChange(page: number) {
        this.page = page;
        this.dataBind();
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


