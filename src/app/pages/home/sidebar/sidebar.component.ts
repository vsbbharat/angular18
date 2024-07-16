import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatNavList],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SidebarComponent {

}
