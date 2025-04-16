import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HeaderComponent, FooterComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'radiostation';
}
