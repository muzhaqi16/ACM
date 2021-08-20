import {Component, OnInit} from '@angular/core';

@Component({
  // selector: 'app-product-detail',//selector is necessary only when nesting components not for routing
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";

  constructor() {
  }

  ngOnInit(): void {
  }

}
