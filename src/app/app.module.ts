import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './shared/search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WeatherModule } from './pages/weather/weather.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    [AppComponent,
    AboutComponent
  ],
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WeatherModule,
    SearchComponent,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
