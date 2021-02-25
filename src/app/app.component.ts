import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-Viewer';
  values = '';

  totalAngularPackages;

    constructor(private http: HttpClient) { }

    ngOnInit() {      
        // Simple GET request with response type <any>
        this.http.get<any>('https://indexof.video/typeahead/that?__cf_chl_jschl_tk__=69ef8fe70a5d0debc7e652ee4f5c18e448eeb0ff-1614227872-0-AVLLcyR2Bxwul88srTVBogKMklCTzryKPgSgsDgf-_0phIHZnGgzfAyWHWxZVet36GXx32pAcrOMsq3TDK2a7fR1dfUEOIlOdJTi6wtRyBubMijRsaLIdvWZgEzdSY5GkjgkOg4-RwLo7DOm5rOI_ccs0UOrRy55hyapVgqr8G-9PswrGyJaXWG1uQlpvOSXfLl3iAXqKjcLb6VMZ-fmsQYCJab3pCEH9XSq_Q0H38BRerZaez-ROQpWkvehd07Nq_7fjmuiH0QP2m6YAsoYdLAt-nZyoknmGKWyITPWhGMkmrHDTORKOR-5eas7rdDszZPPHJdOBTmciLLnvYUkGkc').subscribe(data => {
            this.totalAngularPackages = data;
        })

    }



  onKey(event: any) { // without type info
    this.values = event.target.value
  }
}
