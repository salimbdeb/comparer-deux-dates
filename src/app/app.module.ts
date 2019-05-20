import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ValiderDateCreationApresDateDemandeDirective } from './commun/valider-date-creation-apres-date-demande.directive';
import { DeuxDatesAcomparerComponent } from './deux-dates-acomparer/deux-dates-acomparer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ValiderDateCreationApresDateDemandeDirective,
    DeuxDatesAcomparerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
