import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import {HttpClientModule,} from '@angular/common/http';
//Imported Http Client

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //All Modules should be imported here. 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
