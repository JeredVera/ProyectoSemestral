import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'conductores',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/conductores/conductores.module').then( m => m.ConductoresPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./pages/conductores/detalle/detalle.module').then( m => m.DetallePageModule)
      }
    ]
  },
  {
    path: 'pasajeros',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pasajeros/pasajeros.module').then( m => m.PasajerosPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./pages/pasajeros/detalle/detalle.module').then( m => m.DetallePageModule)
      }
    ]
  },
  {
    path: 'cargando',
    loadChildren: () => import('./pages/cargando/cargando.module').then( m => m.CargandoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recuperar-pass',
    loadChildren: () => import('./pages/recuperar-pass/recuperar-pass.module').then( m => m.RecuperarPassPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'home-conductores',
    loadChildren: () => import('./pages/home-conductores/home-conductores.module').then( m => m.HomeConductoresPageModule)
  },
  {
    path: 'mapa-pasajero',
    loadChildren: () => import('./pages/mapa-pasajero/mapa-pasajero.module').then( m => m.MapaPasajeroPageModule)
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./pages/codigo-qr/codigo-qr.module').then( m => m.CodigoQrPageModule)
  },
  {
    path: 'confirmar-qr',
    loadChildren: () => import('./pages/confirmar-qr/confirmar-qr.module').then( m => m.ConfirmarQrPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'privacidad',
    loadChildren: () => import('./pages/privacidad/privacidad.module').then( m => m.PrivacidadPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./pages/terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'conductores-favoritos',
    children:[
      {
        path: '',
        loadChildren: () => import('./pages/conductores-favoritos/conductores-favoritos.module').then( m => m.ConductoresFavoritosPageModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./pages/conductores-favoritos/detalle/detalle.module').then( m => m.DetallePageModule)
      }
    ]
  },  {
    path: 'leer-qr',
    loadChildren: () => import('./pages/leer-qr/leer-qr.module').then( m => m.LeerQrPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
