import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalCloseReason } from '../../../../core/constants';
import { Post } from '../../services/post.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent {
  currentLang: string = this.translate.currentLang;

  @Input()
  posts: Post[] = [];

  @Input()
  headline: string = '';

  headlineInput: string = '';

  newHeadlineVal: string = '';

  @Output()
  newHeadlineEvent = new EventEmitter<string>();

  displayInputBlock: boolean = false;

  modalOpened: boolean = false;

  modalCloseReason: string = '';

  constructor(public translate: TranslateService) {
    translate.use(this.currentLang);
  }

  newHeadline(value: string): void {
    this.newHeadlineEvent.emit(value);
    this.headlineInput = '';
  }

  openModalHandler(): void {
    this.modalOpened = !this.modalOpened;
  }

  updateHeadlineOnModalChange(value: string): void {
    this.modalCloseReason = value;
  }

  closeModalHandler(value: boolean): void {
    this.modalOpened = value;

    if (this.modalCloseReason === ModalCloseReason.SAVE) {
      this.newHeadline(this.headlineInput);
    }
  }

  // // TODO: change texts 'Change Headline' and 'Save' to translations
}
