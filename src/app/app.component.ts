import { ChangeDetectorRef, Component } from '@angular/core';
import { Artist, GoogleSheetsService } from './google-sheets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  artists: Artist[] | undefined;
  loading = true;
  hideCanvas = false;
  destroyCanvas = false;
  constructor(
    private sheets: GoogleSheetsService,
    private cdr: ChangeDetectorRef
  ) {
    this.sheets.getSheetData().subscribe((artists) => {
      this.artists = artists.filter((a) => a.paid !== '');
      this.loading = false;
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

  animationStateChanged(state: string[]) {
    if (state.length === 1 && state[0] === 'Final Spin') {
      this.hideCanvas = true;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.destroyCanvas = true;
        console.log(this.destroyCanvas);
        this.cdr.detectChanges();
      }, 2000);
    }
  }
}
