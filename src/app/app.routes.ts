import { Routes } from '@angular/router';
import { NodeListComponent } from './node-list/node-list.component';

export const routes: Routes = [
  {path: '', component: NodeListComponent},
  {path: '**', redirectTo: ''}
];