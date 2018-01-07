import { Component, Input } from '@angular/core';
import { CarouselModel, CarouselComponent } from '../plugins/carousel/carousel.component';

import { User } from '../users/shared/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  title = 'home';
  isShow = false;

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

  bindTable() {

  }

  click(event: any, id: any) {
    alert(id);
  }
}
