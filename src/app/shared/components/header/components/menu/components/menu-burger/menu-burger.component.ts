import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBurgerComponent {
  @Input()
  menuActive!: boolean;
}
