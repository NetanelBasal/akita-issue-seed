import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos/todos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    component: TodosComponent,
    path: 'todos'
  },
  {
    component: HomeComponent,
    path: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
