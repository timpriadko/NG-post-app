import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent {
  @Input()
  langs!: String[];

  @Input()
  currentLang!: String;

  @Output()
  newLangEvent = new EventEmitter<string>();

  constructor() {}

  newLangHandler(value: string): void {
    this.newLangEvent.emit(value);
  }
}
