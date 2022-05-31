import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  id = "";
  productDetail :any;
  constructor(private router: Router,private router2: ActivatedRoute,private api : ProductsService) {}
  ngOnInit(): void {
    this.id = this.router2.snapshot.paramMap.get('id') ?? "";
    this.api.productDetails(this.id).subscribe((data) => {
     this.productDetail = data
    })
  }
  clickBuy = () => {
this.router.navigateByUrl('/checkout/'+ this.id);
  }
}
