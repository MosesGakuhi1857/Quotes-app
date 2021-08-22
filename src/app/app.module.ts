import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { FormQuoteComponent } from './form-quote/form-quote.component';
import { DateCountPipe } from './date-count.pipe';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeComponent } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    FormQuoteComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
