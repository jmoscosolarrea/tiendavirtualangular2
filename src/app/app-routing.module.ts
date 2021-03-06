import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'barra-superior', component: BarraSuperiorComponent },
  { path: 'productos', component: ProductosComponent }
];
/*const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'productos', component: ProductosComponent }
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
