import { Component, OnInit } from '@angular/core';
import { Artist, GoogleSheetsService } from './google-sheets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  artists: Artist[] | undefined;

  constructor(private sheets: GoogleSheetsService) {}

  ngOnInit() {
    this.sheets.getSheetData().subscribe((x) => {
      this.artists = x;
    });
  }

  goTo(url: string) {
    if (url) window.open(url, '_blank');
  }
}
