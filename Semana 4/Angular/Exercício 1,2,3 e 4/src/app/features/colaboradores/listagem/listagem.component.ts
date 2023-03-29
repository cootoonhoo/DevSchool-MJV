import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent {
  screenWidth : boolean = window.screen.width >= 1920;
  easterEgg : boolean = false;

  photosArray : any[] = [
    {
    image : "https://images.pexels.com/photos/14914929/pexels-photo-14914929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title : "Cavalo"
    },
    {
    image : "https://images.pexels.com/photos/14590086/pexels-photo-14590086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title : "Montanhas"
    },
    {
    image : "https://images.pexels.com/photos/14537006/pexels-photo-14537006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title : "Ponte"
    },
    {
    image : "https://images.pexels.com/photos/15457508/pexels-photo-15457508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title : "Predio"
    }
  ]

  showHiddenText(){
    this.easterEgg = !this.easterEgg;
  }
}
