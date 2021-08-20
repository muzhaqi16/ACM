import {Component, EventEmitter, OnInit} from "@angular/core";

import {IProduct} from './product';
import {ProductService} from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers:[ProductService] // if we want the service to be available only for this component and it's children
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;//no need to specify type if you assign it
  showImage: boolean = false;
  private _listFilter: string = '';

  /* private _productService;
     constructor(productService: ProductService) {
     this._productService = productService;
     }
  //this can be done in one line below*/
  constructor(private productService: ProductService) {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }


  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product) => product.productName.toLocaleLowerCase().includes(filterBy));
  }

  //void return type
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  //lifecycle method, angular starts with ng
  ngOnInit(): void {
    this.listFilter = '';
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
