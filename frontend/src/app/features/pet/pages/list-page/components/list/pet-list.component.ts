import { Component, Input } from '@angular/core';
import { PetModel } from '../../../../models/pet.model';
import { PetListItemComponent } from './components/list-item/pet-list-item.component';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  templateUrl: './pet-list.component.html',
  imports: [PetListItemComponent],
  styleUrl: './pet-list.component.scss',
})
export class PetListComponent {
  @Input() pets: PetModel[] = [];
}
