import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CmsConfig, ConfigModule } from "@spartacus/core";
import { WeatherComponent } from "./weather.component";

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        WeatherComponent: {
          component: WeatherComponent,
          selector: "app-weather"
        }
      }
    } as CmsConfig)
  ],
  entryComponents: [WeatherComponent],
  exports: [WeatherComponent]
})
export class WeatherModule {}
