import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'bypassSecurityTrustHtml'
})

export class BypassSecurityTrustHtmlPipe implements PipeTransform {
    constructor(private domSanitizer: DomSanitizer) { }
    transform(html: string, args: any[]): any {
        return this.domSanitizer.bypassSecurityTrustHtml(html);
    }
}
