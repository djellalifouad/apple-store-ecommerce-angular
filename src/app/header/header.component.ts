import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search= "";
  category = "";
  constructor(private router: Router,private router2: ActivatedRoute,private api :CategoriesService) { }
  list :any[] = [];
  ngOnInit(): void {
    this.api.list().subscribe((data)=>{
    this.list = data
});
  this.router2.queryParams.subscribe(params => {
         this.search = params['search'] ?? "";
         this.category = params['category'] ?? "";
    });
  }
  categoryApply(categorieId : string ) {
       this.category = categorieId;
       this.router.navigateByUrl('/?category=' + this.category + '&search=' + this.search);

  }
  searchApply() : void  {
       this.router.navigateByUrl('/?category=' + this.category + '&search=' + this.search);
  }
}
