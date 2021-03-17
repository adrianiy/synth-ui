import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";
import { FiltersConfig } from "./filters";
import { ListData } from "./list";

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith("/filters") && method === "GET":
                    return getFilters();
                case url.endsWith("/country") && method === "GET":
                    return getListData();
                default:
                    return next.handle(request);
            }
        }

        function getFilters() {
            return ok(FiltersConfig);
        }

        function getListData() {
            return ok(ListData());
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }));
        }
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
