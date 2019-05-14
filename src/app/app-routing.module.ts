import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: '',
    loadChildren: './2-spa/home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './2-spa/about/about.module#AboutModule'
  },
  {
    path: 'contacts',
    loadChildren: './3-data/contacts/contacts.module#ContactsModule'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
