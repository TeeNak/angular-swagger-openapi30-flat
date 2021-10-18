import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }  from '@angular/common/http' ;

import { ApiModule, Configuration } from '../swagger-client';

export class ApiConfigurationService {
  public static getApiConfiguration(): Configuration {
    return new Configuration({
      basePath: "https://localhost:44320"
    });
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule.forRoot(ApiConfigurationService.getApiConfiguration)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
