import { HttpClientModule } from '@angular/common/http'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { MainComponent } from './components/main/main.component'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { RemotesService } from './services/remotes.service'
import { initializeAppFactory } from './utils/app-initializer'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderComponent,
    MainComponent,
    SidenavComponent,
    AppRoutingModule
  ],
  providers: [
    RemotesService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [RemotesService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
