import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  movies : any = [{
    imgLink: 'https://upload.wikimedia.org/wikipedia/pt/3/32/Mr._Nobody_%28film_poster%29.jpg',
    title: 'Mr.Nobody',
    year: '2009'
    },
    {
      imgLink: 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg',
      title: 'Fight Club',
      year: '1999'
    },
    {
      imgLink: 'https://musicart.xboxlive.com/7/c96d1100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      title: 'Inception',
      year: '2010'
    }
  ]
}
