import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { CarouselModel, CarouselComponent } from '../plugins/carousel/carousel.component';

import { User } from '../users/shared/user.model';
import { TableComponent } from '../plugins/table/table.component';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title = 'home';
  isShow = false;
  total: number;
  subject = new Subject<Array<any>>();

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
    // console.log(table.pageEvent);
    table.columnTitles = ['标题1', '标题2'];
    // below get by ajax post
    table.pageEvent.pageSize = 5;
    table.pageEvent.total = 11;

    setTimeout(() => {
      table.data = table.pageEvent.current==1? [
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
      ]:[
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
        { 'col1': 'data-2', 'col2': 'img1' },
      ];
      table.bind();
    }, 3000);
  }

  click(event: any, id: any) {
    alert(id);
  }
}
