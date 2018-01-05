import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'angular2-datatable'

import { TableCommandComponent } from './table.command.component';
import { TableComponent } from './table.component';

@NgModule({
    declarations: [TableComponent,TableCommandComponent],
    imports: [
        DataTableModule,
        CommonModule
    ],
    exports: [TableComponent]
})

export class TableModule {

}