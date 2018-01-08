import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'angular2-datatable';

import { TableComponent } from './table.component';
import { ColumnComponent } from './table.column.Component';
import { SharedModule } from '../../shared/shared.module';
import { NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        TableComponent,
        ColumnComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        DataTableModule,
        NgbPaginationModule,
    ],
    exports: [TableComponent, ColumnComponent]
})

export class TableModule { }
