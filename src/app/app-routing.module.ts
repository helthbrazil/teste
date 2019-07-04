import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'pmmg-library';
import { UnauthorizedComponent, NotFoundComponent } from 'pmmg-library';
import { PrincipalComponent } from './principal/principal.component';
import { SecundariaComponent } from './secundaria/secundaria.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'fotos',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'fotos',
    component: PrincipalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'secundaria',
    component: SecundariaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
    data: { blankTemplate: true }
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
