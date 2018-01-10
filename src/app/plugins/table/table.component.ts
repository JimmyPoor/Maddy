import {
    Component, Input, Output, ChangeDetectionStrategy,
    OnInit, EventEmitter, HostListener, AfterViewInit,
    ContentChild, TemplateRef, ViewContainerRef, QueryList,
    ContentChildren, AfterContentInit, ViewChild, ChangeDetectorRef
} from '@angular/core';
import { isNullOrUndefined } from 'util';

import { ColumnComponent } from './table.column.Component';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TableComponent implements AfterContentInit, OnInit {
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
    // 列模板
    @ContentChildren(ColumnComponent) columnTemplate: QueryList<ColumnComponent>;
    // 绑定数据源
    @Output() bindSourceRequest: EventEmitter<TableComponent>;
    // 主题
    @Input() tableTheme = 'table-theme-chocolate';
    // 列数组
    columnTitles: Array<string> = new Array<any>();
    // 数据源
    @Input() data: Array<any> =  new Array<any>();

    // 分页事件
    pageEvent: PageEvent = {
        pageSize: 5,
        current: 0,
        total: 0
    };
    // 空数据标题
    private isNoData: boolean;
    // 绑定table空间的视图模型
    private viewModels: Array<any>;

    constructor(public cdRef: ChangeDetectorRef) {
        this.bindSourceRequest = new EventEmitter();
        // this.mock();
    }

    ngOnInit() { }

    ngAfterContentInit() { }

    // 绑定列模板
    bind() {
        if (isNullOrUndefined(this.data)) {
            return;
        }

        this.viewModels = this.clone(this.data);
        let temp = null;
        for (let i = 0; i < this.columnTemplate.length; i++) {
            temp = this.columnTemplate.find((x, k) => i === k);
            if (isNullOrUndefined(temp)) {
                continue;
            }

            for (let j = 0; j < this.viewModels.length; j++) {
                this.getKeys(this.data[j])
                    .forEach(key => {
                        temp.content = temp.content.replace('&' + key, this.data[j][key]);
                        this.viewModels[j][temp.columnName] = temp.content;
                    });

            }
        }

        this.cdRef.markForCheck();
    }

    // 数据绑定
    private bindRequest() {
        if (!isNullOrUndefined(this.bindSourceRequest)) {
            this.bindSourceRequest.emit(this);
        }
    }

    // 分页响应
    private pageChange() {
        this.bindRequest();
    }

    private getKeys(item) {
        return Object.keys(item);
    }

    // 临时数据
    private mock() {
        this.columnTitles.forEach((c, i) => {
            this.viewModels[i]['col'] = '';
        });
    }

    // 克隆方法
    private clone(obj) {
        let copy;

        if (null == obj || 'object' !== typeof obj) { return obj; }

        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        if (obj instanceof Array) {
            copy = [];
            for (let i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.clone(obj[i]);
            }
            return copy;
        }

        if (obj instanceof Object) {
            copy = {};
            for (const attr in obj) {
                if (obj.hasOwnProperty(attr)) { copy[attr] = this.clone(obj[attr]); }
            }
            return copy;
        }

        throw new Error('Unable to copy obj! Its type isn\'t supported.');
    }
}

export interface PageEvent {
    total: number;
    pageSize: number;
    current: number;
}




