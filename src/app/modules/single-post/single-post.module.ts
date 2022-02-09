import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './single-post.component';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/libs/settings/HttpLoaderFactory';
import { HttpClient } from '@angular/common/http';
import { MissingTranslationService } from 'src/app/core/services/translate-service/MissingTranslationService';
import { environment } from 'src/environments/environment';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SinglePostComponent,
  ],
  imports: [
    CommonModule,
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
    SharedModule
  ]
})
export class SinglePostModule { }
