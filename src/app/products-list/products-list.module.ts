import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { ProductsListComponent } from './products-list.component';
import { AppRoutingModule } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    PaginationComponent,
    ProductsListComponent
  ],
  exports: [
    PaginationComponent,
    ProductsListComponent
  ]
})
export class ProductsListModule { }
