import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { MissingTranslationService } from '../../core/services/translate-service/MissingTranslationService';
import { HttpLoaderFactory } from '../../libs/settings/HttpLoaderFactory';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { GoToPostsComponent } from './components/go-to-posts/go-to-posts.component';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [GoToPostsComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
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
  exports: [GoToPostsComponent],
  providers: [],
})
export class HomeModule {}
