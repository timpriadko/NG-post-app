import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { HttpLoaderFactory } from './libs/settings/HttpLoaderFactory';
import { AppRoutingModule } from './app-routing.module';
import { MissingTranslationService } from './core/services/translate-service/MissingTranslationService';
import { HeaderComponent } from './core/header/header.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { PostModule } from './modules/post/post.module';
import { HeadlineComponent } from './modules/post/components/headline/headline.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomepageComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { PostPageComponent } from './modules/post/post.component';
import { NavigationComponent } from './core/header/components/navigation/navigation.component';
import { LanguageSelectorComponent } from './core/header/components/language-selector/language-selector.component';
import { environment } from '../environments/environment';
import { NgbModalModule } from './core/modal/modal.module';
import { MenuItemComponent } from './core/header/components/menu/components/menu-item/menu-item.component';
import { MenuComponent } from './core/header/components/menu/components/menu.component';
import { MenuBurgerComponent } from './core/header/components/menu/components/menu-burger/menu-burger.component';
import { SinglePostPageComponent } from './modules/post/components/single-post-page/single-post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomepageComponent,
    ErrorPageComponent,
    PostPageComponent,
    HeadlineComponent,
    LanguageSelectorComponent,
    MenuItemComponent,
    MenuComponent,
    MenuBurgerComponent,
    SinglePostPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    HomeModule,
    PostModule,
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
    AppRoutingModule,
    NgbModalModule,
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
