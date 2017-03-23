import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    IntroComponent,
    GetQuotesComponent
  ],
})
export class AppModule {}