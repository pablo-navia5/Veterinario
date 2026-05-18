import { Component, inject } from '@angular/core';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  templateUrl: 'alert.component.html',
  styleUrl: 'alert.component.scss'
})
export class AlertComponent {

  private alertService: AlertService = inject(AlertService);

  alertMessage = this.alertService.alertMessage;

  clearAlert() {
    this.alertService.clearAlert();
  }
}
