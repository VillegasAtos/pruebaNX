import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ComponenteComponent } from './componente/componente.component';
import { UnalibreriaModule } from '@pruebamia/unalibreria';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ComponenteComponent],
  imports: [BrowserModule, UnalibreriaModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NxWelcomeComponent],
})
export class AppModule {}
