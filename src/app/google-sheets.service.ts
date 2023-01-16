import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Artist {
  paid: string;
  name: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetsService {
  constructor() {}

  getSheetData(): Observable<Artist[]> {
    return new Observable<Artist[]>((subscriber) => {
      subscriber.next([
        {
          name: 'Danielle Romaine',
          link: 'https://danielle-romaine.web.app/',
          paid: 'x',
        },
        { name: 'Joe Carlo Romero', link: '', paid: 'x' },
        { name: 'Maxime Jarzynski', link: '', paid: 'x' },
        { name: 'Riad El Mahmoudy', link: '', paid: 'x' },
        { name: 'H-L. Lapointe-Guevara', link: '', paid: 'x' },
        { name: 'Ryann Goldd', link: '', paid: 'x' },
        { name: 'Edzin', link: '', paid: 'x' },
        { name: 'Karine Bazerghi', link: '', paid: 'x' },
        { name: 'Emma Ruixin Tian', link: '', paid: 'x' },
        { name: 'Eugenie Artoun', link: '', paid: 'x' },
        { name: 'Nel Green', link: '', paid: 'x' },
        { name: 'Riesbri', link: '', paid: 'x' },
        { name: 'Crawford Bennett-Diaz', link: '', paid: 'x' },
        { name: 'Milla Lopes', link: '', paid: 'x' },
        { name: 'Paige', link: '', paid: 'x' },
        { name: 'M. Menou-Maillet', link: '', paid: 'x' },
        { name: 'Niss Ink', link: '', paid: 'x' },
      ]);
      subscriber.complete();
    });
  }
}
