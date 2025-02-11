import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './componnents/crear-producto/crear-producto.component';

// componentes
import { ListarProductosComponent } from './componnents/listar-productos/listar-productos.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: ListarProductosComponent },
    { path: 'crear-producto', component: CrearProductoComponent },
    { path: 'editar-producto/:id', component: CrearProductoComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }