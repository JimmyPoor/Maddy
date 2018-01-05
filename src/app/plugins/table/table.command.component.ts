import { Component, Input, ElementRef, HostListener } from '@angular/core'

@Component({
    selector: '<app-table-command>',
    template: '<div>{{content}}<div>'
})

export class TableCommandComponent {
    @Input() content: string;
}