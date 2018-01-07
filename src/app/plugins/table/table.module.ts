import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'angular2-datatable';

import { TableComponent } from './table.component';
import { ColumnComponent } from './table.column.Component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        TableComponent,
        ColumnComponent
    ],
    imports: [
        DataTableModule,
        CommonModule,
        SharedModule
    ],
    exports: [TableComponent, ColumnComponent]
})

export class TableModule { }
