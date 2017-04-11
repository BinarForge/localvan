import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { IntroComponent } from './screens/intro.component';
import { GetQuotesComponent } from './screens/get-quotes.component';
import { PostCodeLookupComponent } from "./components/postcode-lookup-input.component";

const appRoutes: Routes = [
  { path: '',            component: IntroComponent },
  { path: 'get-quotes',  component: GetQuotesComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: AppService.API_KEY
    }),
    HttpModule
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    IntroComponent,
    PostCodeLookupComponent,
    GetQuotesComponent
  ],
  providers: [
    AppService
  ]
})
export class AppModule {}