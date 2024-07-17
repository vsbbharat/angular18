import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { SidebarComponent } from '../home/sidebar/sidebar.component';
import { MatCard } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule, MatToolbar,SidebarComponent,MatCard],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css',
})
export class ChecklistComponent {
  items = [
    'Air Cleaner', 'Battery', 'Breakers', 'Cooling System', 'Engine',
    'Fan Belt', 'Fuel Saving Tips', 'Fuel Systems', 'Hydraulics'
  ];
}
