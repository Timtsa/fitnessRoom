import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedService} from './shared.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExersiselistComponent } from './exersiselist/exersiselist.component';
import { ExersiseComponent } from './exersiselist/exersise/exersise.component';
import {HttpClientModule} from '@angular/common/http';
import { AddexersiseComponent } from './exersiselist/exersise/addexersise/addexersise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExersiselistComponent,
    ExersiseComponent,
    AddexersiseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
