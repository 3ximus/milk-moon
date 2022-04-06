import { Component } from '@angular/core';

interface Artist {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  artists: Artist[] = [
    { name: "Danielle ♥ ", url: "https://danielleromaine.wixsite.com/artwork" },
    { name: "Max 📸", url: "" },
    { name: "Joe 🌞 ", url: "" },
    { name: "Aspirin 🐈 ", url: "" },
    { name: "Other", url: "" },
    { name: "Other", url: "" },
    { name: "Other", url: "" },
    { name: "Other", url: "" },
    { name: "Other", url: "" },
    { name: "Other", url: "" },
    { name: "Other", url: "" },
    { name: "Other", url: "" },
    { name: "Other", url: "" },
  ]
}
