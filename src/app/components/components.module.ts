import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SvgsModule } from '../svgs/svgs.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TitleComponent, PaginationComponent],
  imports: [
    CommonModule,
    SvgsModule,
    RouterModule
  ],
  exports: [TitleComponent, PaginationComponent],
})
export class ComponentsModule { }
