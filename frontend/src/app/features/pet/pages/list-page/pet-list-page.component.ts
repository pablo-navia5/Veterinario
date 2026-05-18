import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { PetModel } from '../../models/pet.model';
import { Subscription } from 'rxjs';
import { PetService } from '../../services/pet.service';
import { PetListComponent } from './components/list/pet-list.component';
import { RouterLink } from '@angular/router';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-pet-list-page',
  standalone: true,
  templateUrl: './pet-list-page.component.html',
  styleUrl: './pet-list-page.component.scss',
  imports: [PetListComponent, RouterLink]
})
export class PetsListPageComponent implements OnInit {
  pets: PetModel[] = [];
  private subscription: Subscription = new Subscription();

  private readonly petService: PetService = inject(PetService);
  private readonly alertService: AlertService = inject(AlertService);
  private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.subscription.add(
      this.petService.getPets().subscribe({
        next: (data: PetModel[]) => {
          this.pets = data;
          this.cdr.detectChanges();
        },
      }),
    );
  }

  onDelete(id: string): void {
    if (confirm('Quieres eliminar esta mascota del sistema?')) {
      this.petService.deletePet(id).subscribe({
        next: () => {
          this.pets = this.pets.filter(pet => pet.id !== id);
          this.cdr.detectChanges();
        },
        error: () => {
          this.alertService.showAlert('Error al eliminar la mascota');
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
