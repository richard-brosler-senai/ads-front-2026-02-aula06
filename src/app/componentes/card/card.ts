import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {

  @Input() imagePathCard: string = '';
  @Input() tituloCard: string = '';
  @Input() textoCorpo: string = '';
  @Input() textoBotao: string = '';

}