import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../core/constants';
import { MenuItem, MenuItems } from '../../core/app-model/navigation';

@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomepageComponent {
  currentLang: string = this.translate.currentLang;
  menuItems: MenuItem[] = MenuItems;

  constructor(public translate: TranslateService) {
    translate.addLangs([Language.EN, Language.FR]);
    translate.setDefaultLang(Language.EN);

    translate.use(this.currentLang);
  }

  trackByFn(item: any): any {
    return item.id;
  }
}
