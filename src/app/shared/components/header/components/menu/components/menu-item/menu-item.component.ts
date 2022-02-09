import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from '../../../../header.component';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
  currentLang: string = this.translate.currentLang;

  @Input()
  menuItem!: MenuItem;

  constructor(public translate: TranslateService) {
    translate.use(this.currentLang);
  }
}
