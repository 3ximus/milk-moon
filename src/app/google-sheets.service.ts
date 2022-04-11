import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetsService {
  constructor(private http: HttpClient) {}

  getSheetData(): Observable<any> {
    const sheetno = 'o6isq5z';
    const sheetid = '1GLoPM2OKSGQPypZeBL3uCl4diAi4YXLye-LrXIx4jr4';
    const url = `https://spreadsheets.google.com/feeds/list/${sheetid}/${sheetno}/public/values?alt=json`;

    return this.http.get(url).pipe(
      map((res: any) => {
        const data = res.feed.entry;
        const returnArray: Array<any> = [];
        if (data && data.length > 0) {
          data.forEach((entry: any) => {
            const obj = {};
            for (const x in entry) {
              if (x.includes('gsx$') && entry[x]['$t']) {
                // obj[x.split('$')[1]] = entry[x]['$t'];
              }
            }
            returnArray.push(obj);
          });
        }
        return returnArray;
      })
    );
  }
}
