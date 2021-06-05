import { Injectable, Type } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert.component';
@Injectable({providedIn: 'root'})
export class AlertService {
    private options: NgbModalOptions;

    constructor(private ngbModal: NgbModal) {
        this.options = {
            backdrop: 'static',
            keyboard: false,
            size: 'lg'
        }
    }

    async open<T, R>(component: Type<T>, config?: Partial<T>, options?: NgbModalOptions): Promise<R> {
        let opt = {
            ...this.options,
            ...options
        } as NgbModalOptions;

        const modal = this.ngbModal.open(component, opt);
        Object.assign(modal.componentInstance, config);
        return modal.result;
    }

    async confirm(title?: string, assertion?: string, body?: string, confirmText?: string): Promise<boolean> {
        return this.open<AlertComponent, boolean>(AlertComponent, {
            title: title || "Confirm Action",
            assertion: assertion = "Are you sure you want to do this?",
            body: body || "You may lose data by performing this action.",
            confirmText: confirmText|| "Delete"
        });
    }
}