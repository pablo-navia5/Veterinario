import { inject, Injectable } from '@angular/core';
import { PET_CONSTANTS } from '../constants/pet.constants';
import { HttpClient } from '@angular/common/http';
import { PetAdapter } from '../adapters/pet.adapter';
import { map, Observable } from 'rxjs';
import { PetModel } from '../models/pet.model';

@Injectable({ providedIn: 'root' })
export class PetService {
  private readonly url = PET_CONSTANTS.API_URL;
  private readonly http = inject(HttpClient);
  private readonly adapter = inject(PetAdapter);

  getPets(): Observable<PetModel[]> {
    return this.http
               .get<PetModel[]>(`${this.url}/all`)
               .pipe(
                 map((data: any[]) => data.map((pet) => this.adapter.adapt(pet)))
               );
  }

  createPet(pet: PetModel): Observable<PetModel> {
    return this.http
               .post<any>(`${this.url}/new`, pet)
               .pipe(
                 map((response) => this.adapter.adapt(response)),
               )
  }

  updatePet(pet: PetModel): Observable<PetModel> {
    return this.http
               .put<any>(`${this.url}/update`, pet)
               .pipe(
                 map((response) => this.adapter.adapt(response)),
               )
  }

  deletePet(id: string): Observable<void> {
    return this.http
               .delete<any>(`${this.url}/${id}`)
  }

  getPetsByName(name: string): Observable<PetModel[]> {
    return this.http
      .get<any>(`${this.url}/name/${name}`)
  }
}
