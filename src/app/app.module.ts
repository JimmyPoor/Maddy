// system
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// third party
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// mine
import { AppComponent } from './app.component';
import { CounterComponent } from './plugins/counter/counter.component';
import { AppRoutingModule } from './app.routing.module';
import { UsersModule } from './users/users.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    // ststem
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // third party
    // NgbModule.forRoot(),
    // mine
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
