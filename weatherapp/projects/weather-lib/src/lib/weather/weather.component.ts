import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'cxtech-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {

  constructor(private componentData: CmsComponentData<any>) {}


  ngOnInit() {
  }

}
