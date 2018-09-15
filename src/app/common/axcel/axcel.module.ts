import { NgModule } from '@angular/core';

import { AxcelTableComponent } from './axcel-table/axcel-table.component';
import { AxcelHeaderComponent } from './axcel-header/axcel-header.component';
import { AxcelColumnComponent } from './axcel-column/axcel-column.component';
import { AxcelCellComponent } from './axcel-cell/axcel-cell.component';

@NgModule({
  declarations: [
    AxcelTableComponent,
    AxcelHeaderComponent,
    AxcelColumnComponent,
    AxcelCellComponent
  ],
  exports: [
    AxcelTableComponent,
    AxcelHeaderComponent,
    AxcelColumnComponent,
    AxcelCellComponent
  ]
})
export class AxcelModule { }
