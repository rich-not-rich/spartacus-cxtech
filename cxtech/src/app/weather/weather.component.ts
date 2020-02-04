import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CmsComponentData } from "@spartacus/storefront";
import { filter, tap } from "rxjs/operators";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {
  constructor(private componentData: CmsComponentData<any>) {}

  ngOnInit() {}

  get data$() {
    this.componentData.data$.pipe(
      filter(Boolean),
      tap(value => console.log("data"))
    );
    return this.componentData.data$.pipe(filter(Boolean));
  }
}
