import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'angular2-datatable';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { ColumnComponent } from './plugins/table/table.column.component';
import { BypassSecurityTrustHtmlPipe } from './pipes/trust-html-pipe';
import { CarouselComponent } from './plugins/carousel/carousel.component';
import { CardComponent } from './plugins/card/card.component';
import { PopoverDirective } from './plugins/popover/popover';
import { PopoverContent } from './plugins/popover/popover.content';
import { TableComponent } from './plugins/table/table.component';
import { ArticleComponent} from './plugins/article/article.component'

@NgModule({
    imports: [CommonModule, DataTableModule, FormsModule, NgbPaginationModule],
    declarations: [
        BypassSecurityTrustHtmlPipe,
        CardComponent,
        CarouselComponent,
        PopoverDirective,
        PopoverContent,
        TableComponent,
        ColumnComponent,
        ArticleComponent],
    exports: [
        BypassSecurityTrustHtmlPipe,
        CardComponent,
        CarouselComponent,
        PopoverDirective,
        PopoverContent,
        TableComponent,
        ColumnComponent,
        ArticleComponent]
})

export class SharedModule { }
