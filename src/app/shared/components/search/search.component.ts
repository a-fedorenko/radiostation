import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [ButtonComponent, FormsModule],
  standalone: true
})
export class SearchComponent implements OnInit {

  term: string;
  searchIcon = faMagnifyingGlass;
  @Input() placeholder: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  submit() {
    this.search.emit(this.term);
  }

}
