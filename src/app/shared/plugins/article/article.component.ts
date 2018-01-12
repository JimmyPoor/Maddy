import {
    Component, Input, TemplateRef, ContentChild,
    AfterViewInit, ViewChild, ElementRef, OnInit
} from '@angular/core';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements AfterViewInit, OnInit {
    @Input()
    title: string = '文章标题';

    @Input()
    subTitle: string = '';

    @Input()
    author: string = '';

    @Input()
    date: string = '';

    @Input()
    mediaImageUrl: string = 'http://demo.cssmoban.com/cssthemes4/tops_48_Metronic/assets/pages/img/frontend-slider/bg8.jpg';

    @Input()
    contentHeight: number;

    @Input()
    showPreview = false;

    @Input()
    showMedia = false;

    @Input() previewTextLength = Infinity;

    @ViewChild("content") articleContent: ElementRef;

    private contentHtml: string;

    private showAllButton = false;

    ngOnInit() {
        this.showAllButton = this.showPreview;
    }

    ngAfterViewInit() {
        if (this.showPreview) {
            var that = this;
            that.contentHtml = that.articleContent.nativeElement.innerHTML;
            if (that.contentHtml.length > that.previewTextLength)
                that.articleContent.nativeElement.innerHTML = that.contentHtml.substr(0, that.previewTextLength) + '.....';
        }
    }

    showAllContent($event: any) {
        if (this.articleContent)
            this.articleContent.nativeElement.innerHTML = this.contentHtml;
        this.showAllButton = false;
    }
}