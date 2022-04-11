import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleSheetsService } from './google-sheets.service';
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    GoogleSheetsService,
    {
      provide: API_KEY,
      useValue: 'AIzaSyDVNYZGU_CDsWg7FkhL7QWUhrV9BJxGjRg',
    },
    GoogleSheetsDbService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
