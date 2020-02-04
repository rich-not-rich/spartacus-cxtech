import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CmsComponentData } from "@spartacus/storefront";
import { filter, tap } from "rxjs/operators";
import { OpenWeatherService } from "../services/open-weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {
  weather: any;

  constructor(
    private componentData: CmsComponentData<any>,
    private weatherService: OpenWeatherService
  ) {}

  ngOnInit() {
    this.weather = this.weatherService.getForecast("London");
  }

  get data$() {
    this.componentData.data$.pipe(
      filter(Boolean),
      tap(value => console.log("data"))
    );
    return this.componentData.data$.pipe(filter(Boolean));
  }
}
