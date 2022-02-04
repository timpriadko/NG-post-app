import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { HttpLoaderFactory } from '../../libs/settings/HttpLoaderFactory';
import { MissingTranslationService } from '../services/translate-service/MissingTranslationService';
import { NgbdModalBasic } from './modal.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MissingTranslationService,
      },
      useDefaultLang: true,
      defaultLanguage: environment.defaultLocale,
    }),
  ],
  declarations: [NgbdModalBasic],
  exports: [NgbdModalBasic],
  bootstrap: [NgbdModalBasic],
})
export class NgbModalModule {}
