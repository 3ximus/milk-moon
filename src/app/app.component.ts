import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Artist, GoogleSheetsService } from './google-sheets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('melt_animation') meltAnimation!: ElementRef;
  @ViewChild('milk_canvas') milk_canvas!: ElementRef;
  artists: Artist[] | undefined;
  loading = true;
  destroyCanvas = false;
  isAppleTrash = false;

  constructor(
    private sheets: GoogleSheetsService,
    private cdr: ChangeDetectorRef
  ) {
    this.sheets.getSheetData().subscribe((artists) => {
      this.artists = artists.filter((a) => a.paid !== '');
      this.loading = false;
    });
    this.isAppleTrash =
      window.navigator.userAgent.toLowerCase().indexOf('iphone') > -1 ||
      window.navigator.userAgent.toLowerCase().indexOf('macintosh') > -1;
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
      if (!this.isAppleTrash) this.meltAnimation.nativeElement.beginElement();
      else this.milk_canvas.nativeElement.classList.add('down-leave-active');

      this.cdr.detectChanges();
      setTimeout(() => {
        this.destroyCanvas = true;
        this.cdr.detectChanges();
      }, 3000);
    }
  }
}
