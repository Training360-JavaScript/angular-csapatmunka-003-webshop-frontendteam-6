import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel/product-carousel.component';
import { ProductService } from './service/product.service';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ActivePipe } from './pipe/active.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { RandomPipe } from './pipe/random.pipe';
import { FrontendPipe } from './pipe/frontend.pipe';
import { ProductListComponent } from './common/product-list/product-list.component';
import { DataEditorComponent } from './data-editor/data-editor.component';
import { FeaturedListComponent } from './common/featured-list/featured-list.component';
import { SpecialOfferListComponent } from './common/special-offer-list/special-offer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductCardComponent,
    ActivePipe,
    SorterPipe,
    RandomPipe,
    FrontendPipe,
    FilterPipe,
    ProductListComponent,
    ProductCarouselComponent,
    DataEditorComponent,
    FeaturedListComponent,
    SpecialOfferListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
