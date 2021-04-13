import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateTableComponent} from './components/template-table/template-table.component';
import {UsersComponent} from './components/users/users.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {TemplateComponent} from './components/template/template.component';
import {AddTemplateComponent} from './components/addtemplate/add-template.component';

const routes: Routes = [
  {path: 'templates', component: TemplateTableComponent},
  {path: 'templates/:id', component: TemplateComponent},
  {path: 'users', component: UsersComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'template/add', component: AddTemplateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [TemplateTableComponent, UsersComponent,
  RegisterComponent, HomeComponent, TemplateComponent, AddTemplateComponent];
