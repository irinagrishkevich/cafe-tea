import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
  }

  updateSearch(): void {
    this.productService.updateSearchTerm(this.searchTerm);
  }
  //
  resetSearch(): void {
    this.searchTerm = '';
    this.productService.resetSearch();
  }

}
