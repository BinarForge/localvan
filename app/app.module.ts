import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './screens/intro.component';
import { GetQuotesComponent } from './screens/get-quotes.component';

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
      apiKey: 'AIzaSyBNW0Oh0VGHF0ObiEHREIVQCGT6ixQ6NJM'
    })
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    IntroComponent,
    GetQuotesComponent
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}