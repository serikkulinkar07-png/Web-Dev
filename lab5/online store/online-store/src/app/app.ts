import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { categories } from './categories';
import { products } from './data/products';

import { ProductListComponent } from './product-list/product-list';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories = categories;

  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];


  allProducts: Product[] = [...products];

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.selectedProducts = this.allProducts.filter(p => p.categoryId === id);
  }

  removeProduct(id: number) {

    this.allProducts = this.allProducts.filter(p => p.id !== id);


    if (this.selectedCategoryId !== null) {
      this.selectedProducts = this.allProducts.filter(
        p => p.categoryId === this.selectedCategoryId
      );
    } else {
      this.selectedProducts = [];
    }
  }
}
