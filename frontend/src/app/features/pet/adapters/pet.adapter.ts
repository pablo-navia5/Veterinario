import { Injectable } from '@angular/core';
import { PetModel } from '../models/pet.model';

@Injectable({ providedIn: 'root' })
export class PetAdapter {
  adapt(pet: any): PetModel {
    return {
      id: pet.id,
      name: pet.name,
      species: pet.species,
      age: pet.age,
      weight: pet.weight,
    }
  }
}
