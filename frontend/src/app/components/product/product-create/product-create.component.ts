import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{

    product: Product = {
      id: '',
      name: '',
      price: '',
    }

   constructor(private productService: ProductService,
              private router: Router){}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operação realizada com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancelProduct(): void {
    this.router.navigate(['/products'])
  }

}

