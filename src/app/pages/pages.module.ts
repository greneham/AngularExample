import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [ErrorComponent, NotfoundComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
