import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeResultComponent } from './Components/poke-result/poke-result.component';


const routes: Routes = [
  {path: 'body', component: PokeResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
