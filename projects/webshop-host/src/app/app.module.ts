import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeAppFactory } from './app.initializer';
import { PageComponent } from './components/page/page.component';
import { RemotesService } from './services/remotes.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PageComponent,
    AppRoutingModule,
  ],
  providers: [
    RemotesService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [RemotesService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
