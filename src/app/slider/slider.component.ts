import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private router: Router,private api :ProductsService , private router2: ActivatedRoute) {

  }
  search= "";
  category = "";
  list :any[] = [];
  ngOnInit(): void {

      this.router2.queryParams.subscribe(params => {
         this.search = params['search'] ?? "";
         this.category = params['category'] ?? "";
           this.api.list(this.category,this.search).subscribe((data)=>{
           this.list = data
});
    });
  }
  productClick = (id : string) => {
        this.router.navigateByUrl('/productDetail/'+ id);
  }
}
