import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';
import { CarouselComponent } from '../plugins/carousel/carousel.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot()
    ],
    declarations: [HomeComponent, CarouselComponent],
    exports: [HomeComponent]
})

export class HomeModule {

}
