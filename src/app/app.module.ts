import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';
import { MatInputModule } from '@angular/material/input';
import { InterceptorService } from './services/interceptor.service';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { MatNativeDateModule } from '@angular/material/core';

registerLocaleData(localeNl);

@NgModule({
    declarations: [
        AppComponent,
        CsvUploadComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        PageNotFoundComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatToolbarModule,
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'nl',
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
