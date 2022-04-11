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
    this.sheets.getSheetData().subscribe((artists) => {
      this.artists = artists.filter(a => a.paid !== '');
    });
  }

  goTo(url: string) {
    if (url) {
      if (url.startsWith('@'))
        window.open(
          `https://www.instagram.com/${url.replace('@', '')}`,
          '_blank'
        );
      else window.open(url, '_blank');
    }
  }
}
