import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/header/components/navigation/navigation.component';
import { LanguageSelectorComponent } from './components/header/components/language-selector/language-selector.component';
import { MenuItemComponent } from './components/header/components/menu/components/menu-item/menu-item.component';
import { MenuComponent } from './components/header/components/menu/components/menu.component';
import { MenuBurgerComponent } from './components/header/components/menu/components/menu-burger/menu-burger.component';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../libs/settings/HttpLoaderFactory';
import { MissingTranslationService } from '../core/services/translate-service/MissingTranslationService';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
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
  declarations: [
    HeaderComponent,
    NavigationComponent,
    LanguageSelectorComponent,
    MenuItemComponent,
    MenuComponent,
    MenuBurgerComponent,
    FooterComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MenuItemComponent,
    MenuComponent,
    MenuBurgerComponent,
  ]
})
export class SharedModule {}