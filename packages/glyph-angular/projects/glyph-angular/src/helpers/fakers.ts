import { of } from 'rxjs';

export class TranslateServiceStub {
    lang: string = 'es';

    public instant(key: any): any {
        return of(key);
    }

    public setDefaultLang(lang: string) {
        this.lang = lang;
    }

    public use(lang: string) {
        this.lang = lang;
    }

    public getBrowserLang() {
        return 'es';
    }

    public getTranslation() {
        return of('');
    }
}
