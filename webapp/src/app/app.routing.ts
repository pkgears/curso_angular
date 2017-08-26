import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent} from './components/error.component';
import { ProductosListComponent} from './components/productos-list.component';
import { ProductoAddComponent} from './components/producto-add.component';
import { ProductoDetailsComponent} from './components/producto-details.component';
import { ProductoEditComponent} from './components/producto-edit.component';

const appRouter: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'productos', component:ProductosListComponent},
  {path:'nuevo', component:ProductoAddComponent},
  {path:'productos/:id', component:ProductoDetailsComponent},
  {path:'productos/:id/editar', component:ProductoEditComponent},
  {path:'**', component:ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);
