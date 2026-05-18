import { Component, Input } from '@angular/core';
import { PetModel } from '../../../../../../models/pet.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pet-list-item',
  standalone: true,
  templateUrl: './pet-list-item.component.html',
  imports: [RouterLink],
  styleUrl: './pet-list-item.component.scss',
})
export class PetListItemComponent {
  @Input({ required: true }) pet!: PetModel;
}
