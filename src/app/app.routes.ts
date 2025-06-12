import { Routes } from '@angular/router';
import { ValentinePageComponent } from './features/valentine/valentine-page/valentine-page';

export const routes: Routes = [
  { path: '', component: ValentinePageComponent },
  { path: '**', redirectTo: '' }
];
