import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
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
  milkDropAnimationPlayed = false;
  destroyCanvas = false;
  isAppleTrash = false;

  scrolled = false;

  constructor(
    private sheets: GoogleSheetsService,
    private cdr: ChangeDetectorRef
  ) {
    this.isAppleTrash =
      window.navigator.userAgent.toLowerCase().indexOf('iphone') > -1 ||
      window.navigator.userAgent.toLowerCase().indexOf('macintosh') > -1;
    this.sheets.getSheetData().subscribe((artists) => {
      this.artists = artists.filter((a) => a.paid !== '');
      this.loading = false;
      if (!this.loading && this.milkDropAnimationPlayed) this.hideAnimation();
    });
    setTimeout(() => {
      // wait for milk drop animation to reach spinning
      this.milkDropAnimationPlayed = true;
      if (!this.loading && this.milkDropAnimationPlayed) this.hideAnimation();
    }, 3250);
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

  hideAnimation() {
    if (!this.isAppleTrash) this.meltAnimation.nativeElement.beginElement();
    else this.milk_canvas.nativeElement.classList.add('down-leave-active');

    this.cdr.detectChanges();
    setTimeout(() => {
      this.destroyCanvas = true;
      this.cdr.detectChanges();
    }, 3000);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 100;
  }
}
