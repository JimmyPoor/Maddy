import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { CarouselModel, CarouselComponent } from '../plugins/carousel/carousel.component';

import { User } from '../users/shared/user.model';
import { TableComponent } from '../plugins/table/table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title = 'home';
  isShow = false;
  total: number;

  // @ViewChild('table')
  // private isessencList: TableComponent;

  ngOnInit(): void {
    this.total = 10;
  }

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
        url: 'http://demo.cssmoban.com/cssthemes4/tops_48_Metronic/assets/pages/img/frontend-slider/bg9.jpg',
        title: 'this is title3',
        subTitle: ''
      },
    ];
  }

  bindTable(table: TableComponent) {
    table.columnTitles = ["标题1", "标题2"];
    if (table.page <= 1)
      table.data = [
        { 'col1': 'data-1111111111111', 'col2': 'data-1' },
        { 'col1': 'data-2', 'col2': 'data-1' },
        { 'col1': 'data-3', 'col2': 'data-1' },
        { 'col1': 'data-4', 'col2': 'data-1' },
        { 'col1': 'data-5', 'col2': 'data-1' },
      ];
    else {
      table.data = [
        { 'col1': 'data-11', 'col2': 'data-1' },
        { 'col1': 'data-22', 'col2': 'data-1' },
        { 'col1': 'data-33', 'col2': 'data-1' },
        { 'col1': 'data-44', 'col2': 'data-1' },
        { 'col1': 'data-55', 'col2': 'data-1' },
      ];
    }
  }

  click(event: any, id: any) {
    alert(id);
  }
}
