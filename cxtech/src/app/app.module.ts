import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { translationChunksConfig, translations } from "@spartacus/assets";
import { ConfigModule } from '@spartacus/core';
import { B2cStorefrontModule } from "@spartacus/storefront";
import { AppComponent } from "./app.component";
import { OutletModule } from "./outlet/outlet.module";
import { WeatherModule } from './weather/weather.module';
import { weatherLayoutConfig } from './default-layout-config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: "https://localhost:9002",
          prefix: "/rest/v2/"
        }
      },
      context: {
        baseSite: ["electronics-spa"]
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: "en"
      },
      features: {
        level: "1.4",
        anonymousConsents: true
      }
    }),
    OutletModule,
    WeatherModule,
    ConfigModule.withConfig(weatherLayoutConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
