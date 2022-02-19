import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes , RouterModule } from "@angular/router";

import { TopnavigationComponent } from './topnavigation/topnavigation.component';
import { MainnavigationComponent } from './mainnavigation/mainnavigation.component';
import { CwddescriptionComponent } from './cwddescription/cwddescription.component';
import { CwddescrptionsecondComponent } from './cwddescription/cwddescrptionsecond/cwddescrptionsecond.component';
import { MocktestComponent } from './mocktest/mocktest.component';
import { MocktestdescpComponent } from './mocktest/mocktestdescp/mocktestdescp.component';
import { MocktestlistComponent } from './mocktest/mocktestlist/mocktestlist.component';
import { SubandplansComponent } from './subandplans/subandplans.component';
import { BasicplanComponent } from './basicplan/basicplan.component';
import { AnnualplanComponent } from './annualplan/annualplan.component';
import { PremimumplanComponent } from './premimumplan/premimumplan.component';
import { AdvertismentComponent } from './advertisment/advertisment.component';
import { OfferComponent } from './offer/offer.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { ContactformdesginComponent } from './contactformdesgin/contactformdesgin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutusfirstComponent } from './aboutusfirst/aboutusfirst.component';
import { ChosefirstComponent } from './chosefirst/chosefirst.component';
import { OurmisssionComponent } from './ourmisssion/ourmisssion.component';
import { OurvisionComponent } from './ourvision/ourvision.component';
import { OurteamComponent } from './ourteam/ourteam.component';


const approutes:Routes = [
  {path: '',component:CwddescriptionComponent},
  {path: "aboutus",component:AboutusComponent},
  {path:"feedback",component:FeedbackComponent},
];

@NgModule({
  declarations: [
    AppComponent,

    TopnavigationComponent,
     MainnavigationComponent,
     CwddescriptionComponent,
     CwddescrptionsecondComponent,
     MocktestComponent,
     MocktestdescpComponent,
     MocktestlistComponent,
     SubandplansComponent,
     BasicplanComponent,
     AnnualplanComponent,
     PremimumplanComponent,
     AdvertismentComponent,
     OfferComponent,
     FooterComponent,
     FeedbackComponent,
     ContactformComponent,
     ContactdetailsComponent,
     ContactformdesginComponent,
     AboutusComponent,
     AboutusfirstComponent,
     ChosefirstComponent,
     OurmisssionComponent,
     OurvisionComponent,
     OurteamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
