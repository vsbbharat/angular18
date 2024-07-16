import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-notification-list',
  standalone: true,
  imports: [MatCard,CommonModule],
  templateUrl: './notification-list.component.html',
  styleUrl: './notification-list.component.css'
})
export class NotificationListComponent {
  notifications: string[] = ['Notification 1', 'Notification 1', 'Notification 1', 'Notification 1', 'Notification 1'];
}
