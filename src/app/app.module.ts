import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'ngx-materialize';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  entryComponents: [
    AddTaskComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
