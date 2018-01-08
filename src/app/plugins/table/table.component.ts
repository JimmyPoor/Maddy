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
    // 绑定table空间的视图模型
    viewModels: Array<any>;

    constructor() {
        this.bindSourceRequest = new EventEmitter();
    }

    ngOnInit() { }

    ngAfterContentInit() { }

    // 数据绑定
    dataBind() {
        if (!isNullOrUndefined(this.bindSourceRequest)) {
            this.bindSourceRequest.emit(this);
            this.bindColumnTemplate();
        }
    }

    // 分页响应
    private pageChange(page: number) {
        this.page = page;
        this.dataBind();
    }

    // 绑定列模板
    private bindColumnTemplate() {
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
                this.viewModels[j][temp.columnName] = temp.content;
            }
        }
    }

    private getKeys(item) {
        return Object.keys(item);
    }

    // 克隆方法
    private clone(obj) {
        var copy;

        if (null == obj || "object" != typeof obj) return obj;

        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.clone(obj[i]);
            }
            return copy;
        }

        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    }
}




