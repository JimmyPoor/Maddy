/**
 * ts 格式标准

 1. 用4个空格缩进
 2. 括号开头不要另起一行
 3. 不要写只有一行的if , 以及不要省略 if else 的花括号
 4. const > let > var
 5. 不要省略分号
 6. 类型用 PascalCase, 其他用 camelCase
 7. 一行不要过长. 基本上原则是永远不应该需要用鼠标滚动才能看全
 7. 类型名使用 PascalCase
 7. 接口名前不要加 I
 7. 枚举值使用 PascalCase
 7. 函数名使用 camelCase
 7. 属性和局部变量名使用 camelCase
 7. 私有属性名不要使用 _ 前缀
 7. 命名时尽可能地使用全名（而非缩写）

 */


// system
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// third party
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// mine
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // ststem
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        UsersModule,
        HomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { } 
