import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  url = 'http://localhost:8080/uploadFile';

  constructor(private http: HttpClient) { }

  public upload(files: Set<File>): { [key: string]: Observable<number> } {
    const status = {};

    files.forEach(file => {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      const req = new HttpRequest('POST', this.url, formData, {reportProgress: true});

      const progress = new Subject<number>();

      this.http.request(req).subscribe(
        event => {
          if(event.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round(100 * event.loaded / event.total);
            progress.next(percentDone);
          } else if(event instanceof HttpResponse) {
            progress.complete();
          }
        }
      );

      status[file.name] = {
        progress: progress.asObservable()
      };
    });
    return status;
  }
}
