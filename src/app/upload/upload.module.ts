import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule, MatListModule, 
    MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { UploadService } from './upload.service';
import { UploadComponent } from './upload.component';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatDialogModule, MatListModule, FlexLayoutModule,
    HttpClientModule, BrowserAnimationsModule, MatProgressBarModule
  ],
  declarations: [ UploadComponent, DialogComponent ],
  exports: [ UploadComponent ],
  entryComponents: [ DialogComponent ],
  providers: [ UploadService ]
})
export class UploadModule { }
