import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'a11y-header',
  standalone: true,
    imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private translate = inject(TranslateService);
  authService = inject(AuthService);

  get availableLangs() {
    return this.translate.getLangs();
  }

  get currentLang() {
    return this.translate.currentLang;
  }

  switchLang(event: Event) {
    const selector = event.target as HTMLSelectElement;
    const lang = selector.options[selector.selectedIndex].value;
    
    this.translate.use(lang);
  }

  logout() {
    this.authService.logout();
  }

}
