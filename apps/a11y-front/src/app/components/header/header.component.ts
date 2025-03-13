import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'a11y-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private router = inject(Router);
  authService = inject(AuthService);

  goToContact() {
    this.router.navigateByUrl('/contact');
  }

  goToAbout() {
    this.router.navigateByUrl('/about');
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  goToNews() {
    this.router.navigateByUrl('/news');
  }

  logout() {
    this.authService.logout();
  }

}
