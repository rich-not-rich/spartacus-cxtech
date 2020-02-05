import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CmsComponentData } from "@spartacus/storefront";
import { filter, map } from "rxjs/operators";
import { OpenWeatherService } from "../services/open-weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {
  weather$: any;
  data$: any;

  constructor(
    private componentData: CmsComponentData<any>,
    private weatherService: OpenWeatherService
  ) {}

  ngOnInit() {
    this.data$ = this.componentData.data$.pipe(
      map(
        data => (this.weather$ = this.weatherService.getForecast(data.location))
      ),
      filter(Boolean)
    );
  }
}
