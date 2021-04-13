import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import {TemplateService} from './services/template.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersComponent } from './components/users/users.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/alert/alert.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { AddTemplateComponent } from './components/addtemplate/add-template.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    routingComponents,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    RegisterComponent,
    AlertComponent,
    AddTemplateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
  ],
  providers: [TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
