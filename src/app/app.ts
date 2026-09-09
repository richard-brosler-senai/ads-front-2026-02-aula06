import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./componentes/header/header";
import { Menu } from "./componentes/menu/menu";
import { Footer } from "./componentes/footer/footer";

@Component({
  imports: [RouterOutlet, Header, Menu, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('aula06-projeto');
}
