import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleSheetsService } from './google-sheets.service';
import { RiveModule } from 'ng-rive';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RiveModule],
  providers: [GoogleSheetsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
