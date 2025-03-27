import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'a11y-legal-notice-page',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent, FooterComponent],
  templateUrl: './legal-notice-page.component.html',
  styleUrls: ['./legal-notice-page.component.scss'],
})
export class AboutPageComponent {}
