import { Component, inject } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { PetModel } from '../../models/pet.model';
import { Router, RouterLink } from '@angular/router';
import { PetAddItemComponent } from './components/add-item/pett-add-item.component';

@Component({
  selector: 'app-pet-add-page',
  standalone: true,
  templateUrl: './pet-add-page.component.html',
  styleUrl: './pet-add-page.component.scss',
  imports: [PetAddItemComponent, RouterLink],
})
export class PetAddPageComponent {
  private readonly petService: PetService = inject(PetService);
  private readonly router: Router = inject(Router);

  onSavePet(petData: PetModel) {
    this.petService.createPet(petData).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (err) => {},
    });
  }
}
