import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListitemsComponent } from './listitems/listitems.component';
import { ItemcontainerComponent } from './itemcontainer/itemcontainer.component';
import { GamerinfoComponent } from './gamerinfo/gamerinfo.component';
import { FreeboxPopComponent } from './freebox-pop/freebox-pop.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListitemsComponent,
    ItemcontainerComponent,
    GamerinfoComponent,
    FreeboxPopComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
