import { Routes } from '@angular/router';
import { PetListComponent } from './features/pet/pages/list-page/components/list/pet-list.component';
import { PetsListPageComponent } from './features/pet/pages/list-page/pet-list-page.component';

export const routes: Routes = [{
  path: '',
  component: PetsListPageComponent
}];
