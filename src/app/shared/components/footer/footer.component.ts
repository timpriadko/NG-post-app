import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentLang: string = this.translate.currentLang;

  constructor(public translate: TranslateService) {
    translate.use(this.currentLang);
  }

  // TODO: add condition for the footer position on the page
}
