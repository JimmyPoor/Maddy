import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BypassSecurityTrustHtmlPipe } from './pipes/trust-html-pipe';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [BypassSecurityTrustHtmlPipe],
    exports: [BypassSecurityTrustHtmlPipe]
})

export class SharedModule { }
