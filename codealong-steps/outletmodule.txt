import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OutletComponent } from "./outlet.component";

@NgModule({
  declarations: [OutletComponent],
  imports: [CommonModule],
  entryComponents: [OutletComponent],
  exports: [OutletComponent]
})
export class OutletModule {}
