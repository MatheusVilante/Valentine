import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Moment {
  date: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss'
})
export class TimelineComponent {
  @Input() moments: Moment[] = [];
}
