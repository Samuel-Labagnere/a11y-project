import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'a11y-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss'],
})
export class CookieBannerComponent {
  showCookieBanner = true;

  constructor() {
    document.cookie = 'facebookId=123;max-age=31536000;path=/'
    if (document.cookie.indexOf('cookies') >= 0) {
      this.showCookieBanner = false;
    }
  }

  dismissBanner() {
    document.cookie = 'cookies=false;max-age=31536000;path=/';
    this.showCookieBanner = false;
  }
  acceptBanner() {
    document.cookie = 'cookies=true;max-age=31536000;path=/';
    this.showCookieBanner = true;
  }
}
