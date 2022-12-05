import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OurteamComponent } from './ourteam/ourteam.component';

const routes: Routes = [
  { path:"home", component: HomeComponent },
  { path: "product-single", component: ProductsingleComponent },
  { path: "cart", component: CartComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "ourteam",component: OurteamComponent},
  {path: "contactus",component: ContactusComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
