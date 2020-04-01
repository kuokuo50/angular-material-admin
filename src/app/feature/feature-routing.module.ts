import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Component
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'books'
      },
      {
        path: 'books',
        loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
