import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DanielecurrencyComponent } from './danielecurrency/danielecurrency.component';
import { DanielewalletComponent } from './danielewallet/danielewallet.component';
import { RouterModule } from '@angular/router';
import { DanielewalletService } from './danielewallet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'danielecurrency', component: DanielecurrencyComponent },
      { path: 'danielewallet', component: DanielewalletComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DanielecurrencyComponent,
    DanielewalletComponent,
  ],
  bootstrap: [AppComponent],
  providers: [DanielewalletService],
})
export class AppModule {}
