import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

export class NewsletterFormData {
  constructor(public email: string) {}
}

@Component({
  selector: 'a11y-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {
  data = new NewsletterFormData('');
  submit = false;

  onSubmit(form: NgForm) {
    console.log('Submit', form);
    if (form.valid) {
      this.submit = true;
    }
  }
}
