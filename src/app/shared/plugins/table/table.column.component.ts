import { Component, Input, ContentChild, TemplateRef ,ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-column',
    template: '',
})
export class ColumnComponent {
    @Input() columnName: string;
    @Input() content: string;
}
