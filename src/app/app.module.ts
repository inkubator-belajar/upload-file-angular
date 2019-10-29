import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadModule } from './upload/upload.module';
import { PelayananSalinanComponent } from './pelayanan-salinan/pelayanan-salinan.component';

@NgModule({
  declarations: [
    AppComponent,
    PelayananSalinanComponent
  ],
  imports: [
    BrowserModule, UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
