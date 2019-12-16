import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { ConfigModule } from '@spartacus/core';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { weatherLayoutConfig } from './default-layout-config';
import { WeatherModule } from 'weather-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {baseUrl: 'https://localhost:9002',
          prefix: '/rest/v2/'
        }
      },
      context: {
        baseSite: ['electronics']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '1.2'
      },
    }),
    ConfigModule.withConfig(weatherLayoutConfig),
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
