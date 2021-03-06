import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UploadService } from '../upload.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  @ViewChild('txtFile') file;
  public files: Set<File> = new Set();

  progress;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, public uploadService: UploadService) { }

  ngOnInit() {
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for(let key in files) {
      if(!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }

  closeDialog() {
    if(this.uploadSuccessful) {
      return this.dialogRef.close();
    }

    this.uploading = true;
    this.progress = this.uploadService.upload(this.files);

    let allProgressObservables = [];
    for(let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }

    this.primaryButtonText = 'Finish';
    this.canBeClosed = false;
    this.dialogRef.disableClose = true;

    this.showCancelButton = false;

    forkJoin(allProgressObservables).subscribe(
      end => {
        this.canBeClosed = true;
        this.dialogRef.disableClose = false;

        this.uploadSuccessful = true;

        this.uploading = false;
      }
    )
  }

}
