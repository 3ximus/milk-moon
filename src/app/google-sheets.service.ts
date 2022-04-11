import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';

export interface Artist {
  paid: string;
  name: string;
  link: string;
}

const artistsMap = {
  paid: 'Paid',
  name: 'Names',
  link: 'Links',
};

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetsService {
  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  getSheetData(): Observable<Artist[]> {
    const sheetid = '1c-dJjel3KBgQ-Bg9vxAAhGCLkiFba9Ijud1OzAmhyzo';

    return this.googleSheetsDbService.get<Artist>(
      sheetid,
      'Artists',
      artistsMap
    );
  }
}
