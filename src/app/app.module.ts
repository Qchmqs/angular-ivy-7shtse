import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContainerComponent } from './container/container.component';
import { MyDataService } from './my-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ContainerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MyDataService]
})
export class AppModule { }
