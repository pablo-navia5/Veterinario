import { Routes } from '@angular/router';
import { PetsListPageComponent } from './features/pet/pages/list-page/pet-list-page.component';
import { PetAddPageComponent } from './features/pet/pages/add-page/pet-add-page.component';
import { PetEditPageComponent } from './features/pet/pages/edit-page/pet-edit-page';

export const routes: Routes = [
  {
    path: '',
    component: PetsListPageComponent,
  },
  {
    path: 'new',
    component: PetAddPageComponent,
  },
  {
    path: 'edit',
    component: PetEditPageComponent,
  },
];
