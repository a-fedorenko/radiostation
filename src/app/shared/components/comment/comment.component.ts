import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  standalone: true
})
export class CommentComponent {

  @Input() comment: any;

  constructor() { }
}
