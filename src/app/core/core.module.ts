import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavComponent } from './nav/nav.component';
import { NavRoutingModule } from './nav/nav.routing.module';

@NgModule({
    declarations: [NavComponent],
    imports: [
        NavRoutingModule,
        CommonModule // we use ngFor
    ],
    exports: [NavComponent],
    // declarations: [NavComponent],
    // providers: [LoggerService]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
