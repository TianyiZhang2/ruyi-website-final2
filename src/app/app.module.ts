import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact/contact.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      // Add urls here
      { path: '', component: HomePageComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'contact', component: ContactComponent },
    ])
  ],
  declarations: [ 
    AppComponent, 
    TopBarComponent, 
    HomePageComponent, 
    ContactComponent, BottomBarComponent, PricingComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ],
})
export class AppModule { }
