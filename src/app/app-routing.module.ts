import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SliderComponent } from './slider/slider.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
const routes: Routes = [
{
  path: 'productDetail/:id' , component: ProductDetailComponent
}, {
  path: '' ,component :SliderComponent
},
{
  path: 'checkout/:id' ,component :CheckoutComponent
},
{
  path: 'thanksPage' ,component :ThanksPageComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
