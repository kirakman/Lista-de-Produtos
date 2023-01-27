import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

    product: Product;

  constructor(private ProductService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ProductService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(){
      const id = this.route.snapshot.paramMap.get('id');
      this.ProductService.delete(id).subscribe(()=>{
      this.ProductService.showMessage('Produto excluído com sucesso!')
      this.router.navigate(['/products']);
    })
  }

  cancel(){
    this.router.navigate(['/products']);
  }
}
