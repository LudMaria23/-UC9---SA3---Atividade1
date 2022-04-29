import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContatComponent } from './views/contat/contat.component';
import { HomeComponent } from './views/home/home.component';
import { JogadorComponent } from './views/jogador/jogador.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "contat", component: ContatComponent},
  {path: "jogador", component: JogadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
