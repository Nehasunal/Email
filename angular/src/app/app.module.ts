import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpService} from './http.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatCardModule,
    FormsModule,
   ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
      
    MatFormFieldModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
