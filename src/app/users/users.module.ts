import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [ListComponent, DetailComponent]
})
export class UsersModule { }
