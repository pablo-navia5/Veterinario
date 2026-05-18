import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { PetModel } from '../../../../models/pet.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-add-item',
  standalone: true,
  templateUrl: 'pett-add-item.component.html',
  imports: [ReactiveFormsModule],
  styleUrl: 'pett-add-item.component.scss',
})
export class PetAddItemComponent implements OnInit {
  private fb = inject(FormBuilder);

  @Input() petData: PetModel | null = null;
  @Output() save = new EventEmitter<PetModel>();

  petForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    species: ['', Validators.required],
    age: [0, [Validators.required, Validators.min(0)]],
    weight: [0, [Validators.required, Validators.min(0.1)]],
  });

  ngOnInit(): void {
    if (this.petData) {
      this.petForm.patchValue(this.petData);
    }
  }

  get form() { return this.petForm.controls; }

  onSubmit() {
    if (this.petForm.valid) {
      this.save.emit(this.petForm.value);
    } else {
      this.petForm.markAllAsTouched();
    }
  }
}
