import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { timer } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'a11y-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {
  show = false;
  email = '';

  //   constructor() {
  //     timer(5000).subscribe(() => {
  //       this.show = true;
  //     });
  //   }

  signIn() {
    alert('Thank you for selling your soul to the devil!');
  }
}
