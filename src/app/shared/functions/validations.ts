import { CONTROL } from "@angular/cdk/keycodes";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function firstLetterShouldBeUpperCase() : ValidatorFn{
    return (control : AbstractControl) : ValidationErrors | null => {
        const value = <String>control.value
        if(!value) return null;
        if(value.length === 0 ) return null;
        const firstLetter = value[0];
        if(firstLetter !== firstLetter.toUpperCase()){
            return{
            firstLetterShouldBeUpperCase:{
                message :'the first letter should be uppercase'
            }
        }
            
        }
        return null;
    }
}

export function lastLetterShouldBeUpperCase () :ValidatorFn {
    return (control :AbstractControl) : ValidationErrors | null => {
        const value = <String>control.value;
        if(!value) return null;
        if(value.length === 0) return null;
        const lastLetter = value[value.length-1];
        if(lastLetter !== lastLetter.toUpperCase()){
            return {
                lastLetterShouldBeUpperCase:{
                    message : 'last letter should be uppercase'
                }
            }
        }
        return null;
    }
}

export function dateOfBirthCannotBeInTheFutue() : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
        const date = new Date(control.value);
        const today = new Date();
        if(date > today){
            return {
                dateOfBirthCannotBeInTheFutue:{
                    message : "date of birth can't be in the future"
                }

            }
        }
        return null;
    }
}