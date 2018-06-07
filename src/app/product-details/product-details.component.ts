import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../PRODUCTS';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products = PRODUCTS;
  private product = {
    name: '',
    id: 0,
    shortDescription: ''
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    const productId = +(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find((product) => {
      if (product.id === productId) {
        return product;
      }
    });
  }

}
