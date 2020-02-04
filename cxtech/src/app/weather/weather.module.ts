import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { ConfigModule, CmsConfig } from '@spartacus/core';



@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      WeatherComponent: {
        component: WeatherComponent,
        selector: 'app-weather',
      },
    } as CmsConfig)
  ],
  entryComponents: [WeatherComponent],
  exports: [WeatherComponent]
})
export class WeatherModule { }
