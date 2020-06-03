import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { TestTubeComponent } from './test-tube/test-tube.component';

@NgModule({
  declarations: [StarComponent, TestTubeComponent],
  imports: [
    CommonModule
  ],
  exports: [StarComponent, TestTubeComponent]
})
export class SvgsModule { }
