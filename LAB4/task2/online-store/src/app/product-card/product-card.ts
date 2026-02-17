import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent implements OnChanges {
  @Input() product!: Product;

  selectedIndex = 0;

  ngOnChanges(): void {
    this.selectedIndex = 0;
  }

  get currentImage(): string {
    const imgs = this.product?.images?.length ? this.product.images : [this.product.image];
    return imgs[this.selectedIndex] ?? imgs[0];
  }

  selectImage(i: number) {
    this.selectedIndex = i;
  }

  prevImage() {
    const n = this.product.images.length;
    this.selectedIndex = (this.selectedIndex - 1 + n) % n;
  }

  nextImage() {
    const n = this.product.images.length;
    this.selectedIndex = (this.selectedIndex + 1) % n;
  }

  onImgError(e: Event) {
    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/fallback/600/400';
  }

  shareWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}
