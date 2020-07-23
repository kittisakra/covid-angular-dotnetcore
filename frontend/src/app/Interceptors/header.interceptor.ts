import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token =  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGb3IgVGVzdGluZyIsImlkIjoiMyIsInVzZXJuYW1lIjoiYWRtaW4xIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQ2FzaGllciIsImV4cCI6MTU5ODA2OTM1MiwiaXNzIjoiQ29kZU1vYmlsZXMgTHRkIiwiYXVkIjoiaHR0cDovL2NvZGVtb2JpbGVzLmNvbSJ9.IfHI3yTAhHmNK_IXBZpNwyGpFyZJOj4SPPKaO4jpUgw"

        const headers = req.headers.set('Authorization',token);
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}