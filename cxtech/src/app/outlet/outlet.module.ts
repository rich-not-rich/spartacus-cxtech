import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UrlModule } from "@spartacus/core";
import { OutletComponent } from "./outlet.component";

@NgModule({
  declarations: [OutletComponent],
  imports: [CommonModule, RouterModule, UrlModule],
  entryComponents: [OutletComponent],
  exports: [OutletComponent]
})
export class OutletModule {}
