import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'a11y-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {
  show = false;
  email = '';
  submit = false;

  registerToNewsletter() {
    this.submit = true;
  }
}
