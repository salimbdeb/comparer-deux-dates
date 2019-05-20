import { Directive } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValderDateCreationApresDateDemande]'
})
export class ValiderDateCreationApresDateDemandeDirective {

  constructor() { }

}


export function validerDateCreationApresDateDemande(dateDemande: string, dateCreation: string): ValidatorFn {
  return (group: FormGroup): {[key: string]: any} => {
    const datedemande = group.get('dateDemande');
    const datecreation = group.get('dateCreation');
    console.log('la date de demande : '+ datedemande.value);
    console.log('la date de creation : '+ datecreation.value);
    if (datedemande.touched && datecreation.touched) {
      const isMatch = datedemande.value <= datecreation.value;
      // set equal value error on dirty controls
      if (!isMatch && datedemande.valid && datecreation.valid) {
        group.setErrors({DateInvalide: dateDemande});
        const message = 'Date de création inferieur à la datde de demande';
        console.log('le message d\'erreur : ' + message);
        return {'DateInvalide': message};
      }
      /*if (isMatch && datecreation.hasError('DateInvalide')) {
        datecreation.setErrors(null);
      }*/
    }

    return null;
  };
}
