import { Component, inject, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Router, RouterLink } from '@angular/router';
import { PetModel } from '../../models/pet.model';
import { AlertService } from '../../../../core/services/alert.service';
import { PetAddItemComponent } from '../add-page/components/add-item/pett-add-item.component';

@Component({
  selector: 'app-pet-edit-page',
  standalone: true,
  templateUrl: './pet-edit-page.html',
  imports: [RouterLink, PetAddItemComponent],
  styleUrl: './pet-edit-page.scss',
})
export class PetEditPageComponent implements OnInit {
  private readonly petService: PetService = inject(PetService);
  private readonly alertService: AlertService = inject(AlertService);
  private readonly router: Router = inject(Router);

  pet: PetModel | null = null;

  ngOnInit(): void {
    if (history.state && history.state.pet) {
      this.pet = history.state.pet;
    } else {
      this.alertService.showAlert('Error al obtener la mascota');
      this.router.navigate(['']);
    }
  }

  onUpdatePet(formValues: PetModel): void {
    if (!this.pet) return;

    const petToSave: PetModel = {
      ...formValues,
      id: this.pet.id,
    };

    this.petService.updatePet(petToSave).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (err) => {
        this.alertService.showAlert('Error al actualizar la mascota');
      },
    });
  }
}
