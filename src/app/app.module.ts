import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgsModule } from './svgs/svgs.module'
import { ComponentsModule } from './components/components.module'
import { UsersModule } from './users/users.module'
import { PagesModule } from './pages/pages.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgsModule,
    ComponentsModule,
    UsersModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
