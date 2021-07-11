import { LoadingSpinnerService } from './../Services/loadingSpinner.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingSpinnerService: LoadingSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingSpinnerService.busy();
    return next.handle(request).pipe(
      delay(1000),
      finalize(() => {
        this.loadingSpinnerService.idle();
      })
    )
  }
}