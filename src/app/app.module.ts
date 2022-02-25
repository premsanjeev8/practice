import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { Nav1Component } from './nav1/nav1.component';
import { Nav2Component } from './nav2/nav2.component';
import { Card1Component } from './card1/card1.component';
import { CoursesComponent } from './courses/courses.component';
import { LearningComponent } from './learning/learning.component';
import { Corousel1Component } from './corousel1/corousel1.component';
import { Corousel2Component } from './corousel2/corousel2.component';
import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { HcComponent } from './hc/hc.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    Nav1Component,
    Nav2Component,
    Card1Component,
    CoursesComponent,
    LearningComponent,
    Corousel1Component,
    Corousel2Component,
    HcComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
