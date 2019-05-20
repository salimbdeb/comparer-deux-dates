import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { validerDateCreationApresDateDemande } from '../commun/valider-date-creation-apres-date-demande.directive';

@Component({
  selector: 'app-deux-dates-acomparer',
  templateUrl: './deux-dates-acomparer.component.html',
  styleUrls: ['./deux-dates-acomparer.component.css']
})
export class DeuxDatesAcomparerComponent implements OnInit {
  datesForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.datesForm = this.formBuilder.group({
      dateDemande: null,
      dateCreation: null
    } , 
      { validator: validerDateCreationApresDateDemande(  
                'dateDemande' , 
                'dateCreation'
      )} 
    );
  }
 /* 
  const heroForm = new FormGroup({
    'name': new FormControl(),
    'alterEgo': new FormControl(),
    'power': new FormControl()
  }, { validators: identityRevealedValidator }); */

}
