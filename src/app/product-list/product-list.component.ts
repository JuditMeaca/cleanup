import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  product={
    "category": "Limpieza del Hogar",
    "name": "Cera",
    "price": 120,
    "stock": 56,
    "image": "assets/img/hogar.jpg"
  }
  product1={
    "category": "Limpieza del Hogar",
    "name": "Detergente",
    "price": 90,
    "stock": 110,
    "image": "assets/img/hogar.jpg"
  }
  product2={
    "category": "Limpieza del Hogar",
    "name": "Lavalustre",
    "price": 156,
    "stock": 36,
    "image": "assets/img/hogar.jpg"
  }
  product3={
    "category": "Limpieza del Hogar",
    "name": "Veneno para plantas",
    "price": 89,
    "stock": 33,
    "image": "assets/img/jardin.jpg"
  }
  product4={
    "category": "Jardines y Mascotas",
    "name": "Shampoo para perros",
    "price": 99,
    "stock": 44,
    "image": "assets/img/jardin.jpg"
  }
  product5={
    "category": "Cosmetica Automotriz",
    "name": "Shampoo para autos",
    "price": 200,
    "stock": 38,
    "image": "assets/img/autos.jpg"
  }
  product6={
    "category": "Cosmetica Automotriz",
    "name": "Revividor para gomas y vinílicos",
    "price": 220,
    "stock": 28,
    "image": "assets/img/autos.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
