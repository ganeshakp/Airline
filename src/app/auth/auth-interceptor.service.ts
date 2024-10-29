/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let tokenRequest: HttpRequest<any>;
        return this.authService.user.pipe(
            take(1),
            exhaustMap((user) => {
                return next.handle(req);
            })
        );
    }
}
