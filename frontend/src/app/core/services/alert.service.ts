import { Injectable, OnInit, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertService {
  alertMessage = signal<String | null>(null);

  showAlert(message: string): void {
    this.alertMessage.set(message);
  }

  clearAlert(): void {
    this.alertMessage.set(null);
  }
}
