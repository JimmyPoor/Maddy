import {
    Component, Input, Output, EventEmitter, // 如果超过4个则换行
    Directive, ElementRef, OnInit
} from '@angular/core';


@Component({
    selector: `app-carousel`,
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {
    @Input() private isShowControl = true;
    @Output() private prevRequest: EventEmitter<CarouselModel>;
    @Output() private nextRequest: EventEmitter<CarouselModel>;
    @Output() bindSourceRequest: EventEmitter<CarouselComponent>;
    carousels: CarouselModel[];
    private index = 0;

    constructor() {
        this.prevRequest = new EventEmitter();
        this.nextRequest = new EventEmitter();
        this.bindSourceRequest = new EventEmitter();

    }

    ngOnInit(): void {
        this.bindSource();
    }

    private bindSource() {
        this.bindSourceRequest.emit(this);
    }

    private prev() {
        this.index--;
        const length = this.carousels.length;
        if (this.index < 0) {
            this.index = length - 1;
        }
        this.prevRequest.emit(this.carousels[this.index]);
    }

    private next() {
        this.index++;
        const length = this.carousels.length;
        if (this.index === length) {
            this.index = 0;
        }
        this.nextRequest.emit(this.carousels[this.index]);
    }
}

export class CarouselModel {
    url: string;
    title: string;
    subTitle: string;
}

