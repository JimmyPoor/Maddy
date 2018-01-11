import { Component, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';

import { CarouselModel, CarouselComponent } from '../shared/plugins/carousel/carousel.component';
import { TableComponent } from '../shared/plugins/table/table.component';
import { User } from '../users/shared/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  title = 'home';

  // 轮播回滚
  carouselPrev(message: CarouselModel) {
    console.log(message.url);
  }

  // 轮播数据绑定
  bindCarousel(carousel: CarouselComponent) {
    carousel.carousels = [
      {
        url: 'http://demo.cssmoban.com/cssthemes4/tops_48_Metronic/assets/pages/img/frontend-slider/bg9.jpg',
        title: 'this is title1',
        subTitle: ''
      },
      {
        url: 'http://demo.cssmoban.com/cssthemes4/tops_48_Metronic/assets/pages/img/frontend-slider/bg9.jpg',
        title: 'this is title2',
        subTitle: ''
      },
      {
        url: 'http://demo.cssmoban.com/cssthemes4/tops_48_Metronic/assets/pages/img/frontend-slider/bg8.jpg',
        title: 'this is title3',
        subTitle: ''
      },
    ];
  }

  bindTable(table: TableComponent) {
    table.columnTitles = ['标题1', '标题2'];
    table.pageEvent.pageSize = 5;

    setTimeout(() => {
      table.pageEvent.total = 11;
      table.data = table.pageEvent.current === 1 ? [
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
      ] : [
          { 'col1': 'data-2', 'col2': 'img1' },
          { 'col1': 'data-2', 'col2': 'img1' },
          { 'col1': 'data-2', 'col2': 'img1' },
        ];
      table.bind();
    }, 1000);
  }

  click(event: any, id: any) {
    alert(id);
  }
}
