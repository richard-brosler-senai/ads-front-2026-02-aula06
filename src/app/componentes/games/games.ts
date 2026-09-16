import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card';

@Component({
  imports: [FormsModule, CardComponent],
  selector: 'app-games',
  styleUrl: './games.css',
  templateUrl: './games.html',
})
export class Games {
  titulo: string = "Games";
  nome: string = "";
  imagem: string = "https://www.sp.senai.br/images/senai.svg";
  curtidas: number = 0;

  items = [
    {
      imagePathCard: "assets/images/fortnite.jpg",
      tituloCard: "Fortnite",
      textoCorpo: "Battle Royale, eventos, skins e um universo que nunca para de mudar.",
      textoBotao: "Entrar no Battle",
    },
    {
      imagePathCard: "assets/images/roblox.jpg",
      tituloCard: "Roblox",
      textoCorpo: "Milhões de experiências criadas pela comunidade em um universo praticamente infinito.",
      textoBotao: "Explorar mundos",
    },
    {
      imagePathCard: "assets/images/minecraft.jpg",
      tituloCard: "Minecraft",
      textoCorpo: "Construa, sobreviva e transforme blocos em mundos completamente novos.",
      textoBotao: "Começar aventura",
    },
    {
      imagePathCard: "assets/images/animes.jpg",
      tituloCard: "Anime Zone",
      textoCorpo: "Novas temporadas, batalhas épicas e histórias que conquistaram uma geração.",
      textoBotao: "Ver animes",
    },
  ];

  curtir() {
    this.curtidas++;
  }
}
