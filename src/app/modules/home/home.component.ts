import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../core/constants';

@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomepageComponent {
  currentLang: string = this.translate.currentLang;

  constructor(public translate: TranslateService) {
    translate.addLangs([Language.EN, Language.FR]);
    translate.setDefaultLang(Language.EN);

    translate.use(this.currentLang);
  }
}
