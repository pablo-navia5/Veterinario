import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { PetModel } from '../../models/pet.model';
import { Subscription } from 'rxjs';
import { PetService } from '../../services/pet.service';
import { PetListComponent } from './components/list/pet-list.component';
import { RouterLink } from '@angular/router';

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
