import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';
import { ButtonComponent } from '../button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ButtonComponent, FontAwesomeModule, RouterLink],
  standalone: true
})
export class HeaderComponent implements OnInit, OnDestroy {
  arrow: unknown = faArrowRight;
  sub: Subscription;
  isSingIn: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const log = this.authService.user$.subscribe((user) => {
      this.isSingIn = user ? true : false;
    });
    
    // this.sub.add(log);
  }

  ngOnDestroy(): void {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

  log(): void {
    if (this.isSingIn) {
      this.authService.logout();
    } else {
      this.router.navigate(['/registration']);
    }
  }
}
