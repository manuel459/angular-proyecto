import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { DataResolverService } from './services/data-resolver.service';
import { SearchComponent } from './shared/components/search/search.component';

const routes: Routes = [
  {
      path: 'users',
      loadChildren: () => import('./users/users-routing.module').then((m) => m.AppRoutingModule)
  }, 
  {
    path : 'orders',
    component: OrdersComponent,
    resolve: 
    {
      myData: DataResolverService
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
