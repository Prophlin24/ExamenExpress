import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';

@Injectable()
export class ProductService {

   private productsServiceURI: string = 'http://localhost:3000/products';
   private contentHeaders: HttpHeaders;

   constructor(private http: HttpClient) {
      this.contentHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   }

   // Get all products
   getAllProducts(): Observable<Product[]> {
   //    const products = [{
   //       name: 'Airmax',
   //       brand: 'Sneakers',
   //       description: 'blue and white',
   //       price: 50
   //    },
   //    {
   //       name: 'Jordan 23',
   //       brand: 'Sneakers',
   //       description: 'all white',
   //       price: 50
   //    }
   // ]
      const url = `${this.productsServiceURI}`;
      return this.http.get<Product[]>(url);
   }
}