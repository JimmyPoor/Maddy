import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingModule } from 'ngx-loading';

import { HomeComponent } from './home.component';
import { CarouselComponent } from '../plugins/carousel/carousel.component';
import { TableModule } from '../plugins/table/table.module';
import { CardComponent } from '../plugins/card/card.component';

@NgModule({
    imports: [
        LoadingModule,
        NgbModule.forRoot(),
        TableModule,
        CommonModule,
    ],
    declarations: [HomeComponent, CarouselComponent,CardComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
