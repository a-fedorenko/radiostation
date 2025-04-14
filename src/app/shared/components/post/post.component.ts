import { Component, Input } from '@angular/core';
import { faComments, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { CreationDatePipe } from '../../pipes/creation-date.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  imports: [CreationDatePipe, FontAwesomeModule],
  standalone: true
})
export class PostComponent {
  @Input() post: any;

  comment = faComments;
  calendar = faCalendarDays;

  constructor() { }
}
