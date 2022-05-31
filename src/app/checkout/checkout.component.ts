import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { OrderServiceService } from '../order-service.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  id = '';
  productDetail: any;
  checkout: FormGroup;
  constructor(
    private router: Router,
    private router2: ActivatedRoute,
    private api: ProductsService,
    private fb: FormBuilder,
    private orderService:OrderServiceService
  ) {}
  ngOnInit(): void {
    this.checkout = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.required, Validators.minLength(4)],
      ],
      lastname: ['', [Validators.required, Validators.minLength(4)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      cvv: ['', [Validators.required,]],
      cc: ['', [Validators.required, ]],
      address: ['', [Validators.required, Validators.required]],
      wilayas: ['', [Validators.required, Validators.required]],
      zip: ['', [Validators.required,]],
      nameCard: ['', [Validators.required, Validators.required,]],
      cardNum: ['', [Validators.required, Validators.required]],
    });
    this.id = this.router2.snapshot.paramMap.get('id') ?? '';
    this.api.productDetails(this.id).subscribe((data) => {
      this.productDetail = data;
    });
  }
  get f() {
    return this.checkout.controls;
  }
  clickCheckOut()  {
    console.log({ ...this.checkout.value, product_id: this.id });
    this.orderService.makeOrder({...this.checkout.value,product_id : this.id }).subscribe((data) =>{
            this.router.navigateByUrl('/thanksPage');
    });
  }
}
