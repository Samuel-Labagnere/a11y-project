import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'a11y-privacy-policies',
    standalone: true,
    imports: [CommonModule, HeaderComponent],
    templateUrl: './privacy-policies-page.component.html',
    styleUrls: ['./privacy-policies-page.component.scss'],
})
export class PrivacyPoliciesPageComponent {
}

