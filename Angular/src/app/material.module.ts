import { MatTabsModule, MatSidenavModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
 
@NgModule({
  imports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class MaterialModule {}
