import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, CmsConfig } from '@spartacus/core';
import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
          WeatherComponent: {
            component: WeatherComponent,
            selector: 'cxtech-weather',
          },
      },
  } as CmsConfig),
  ],
  entryComponents: [WeatherComponent],
  exports: [WeatherComponent],
})
export class WeatherModule { }
