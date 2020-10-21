import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      category: 'Limpieza del Hogar',
      name: 'Cera',
      price: 120,
      stock: 56,
      image: 'assets/img/hogar.jpg',
      sale: false,
    },
    {
      category: 'Limpieza del Hogar',
      name: 'Detergente',
      price: 90,
      stock: 110,
      image: 'assets/img/hogar.jpg',
      sale: false,
    },
    {
      category: 'Limpieza del Hogar',
      name: 'Lavalustre',
      price: 156,
      stock: 36,
      image: 'assets/img/hogar.jpg',
      sale: false,
    },
    {
      category: 'Limpieza del Hogar',
      name: 'Veneno para plantas',
      price: 89,
      stock: 33,
      image: 'assets/img/jardin.jpg',
      sale: true,
    },
    {
      category: 'Jardines y Mascotas',
      name: 'Shampoo para perros',
      price: 99,
      stock: 44,
      image: 'assets/img/jardin.jpg',
      sale: false,
    },
    {
      category: 'Cosmetica Automotriz',
      name: 'Shampoo para autos',
      price: 200,
      stock: 38,
      image: 'assets/img/autos.jpg',
      sale: false,
    },
    {
      category: 'Cosmetica Automotriz',
      name: 'Revividor para gomas y vinílicos',
      price: 220,
      stock: 0,
      image: 'assets/img/autos.jpg',
      sale: false,
    }
  ]
 
  constructor() { }

  ngOnInit(): void {
  }

}
