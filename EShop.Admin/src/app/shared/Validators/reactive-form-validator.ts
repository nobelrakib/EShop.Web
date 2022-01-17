import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidator{

  public static requiredValidator(controlName: string){
    return (control: AbstractControl): ValidationErrors | null => {
      return !control.value.length ? { error: true, message: `${controlName} is required` } : null;
    };
  }
  
  public static emailAddressValidator(controlName: string){
    return (control: AbstractControl): ValidationErrors | null => {
      return !control.value.length
        ? { error: true, message: `${controlName} is required` }
        : !control.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        ? { error: true, message: `${controlName} is invalid` }
        : null;
    };
  }
  
  public static lengthValidator(
    controlName: string,
    minlength: number,
    maxlength: number
  ) {
    return (control: AbstractControl): ValidationErrors | null => {
     
      let pattern = '^[a-zA-ZA-Z.]{'+minlength+','+maxlength+'}$';
      return !control.value.match(new RegExp(pattern))
        ? {
            error: true,
            message: `${controlName} must contain only alphabets. Min no is ${minlength} and the Max is ${maxlength}`,
          }
        : null;
    };
  }
  
  public static phoneValidator(controlName: string, expectedLength: number) {
    let pattern = '^\\d{' + expectedLength + '}$';
    /* Add an extra backslash before \d if regex is constructed as a string. There is no need for // at the beginning and end of string if using RegExp  */
    return (control: AbstractControl): ValidationErrors | null => {
      return !control.value.match(new RegExp(pattern))
        ? {
            error: true,
            message: `${controlName} must be numeric with ${expectedLength} digits`,
          }
        : null;
    };
  }
  
  public static dateValidator(controlName: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      let today = new Date();
      let selectedDate = new Date(control.value);
      return selectedDate.getTime() > today.getTime()
        ? { error: true, message: `${controlName} cannot be a future date` }
        : null;
    };
  }
}





















//   public static dateRangeValidator(startControlName: string, endControlName: string): ValidatorFn {
//     return function dateRangeValidatorFn(control: AbstractControl): {[key: string]: Boolean} | null{
//         let start = control.get(startControlName).value as NgbDate;
//         let end = control.get(endControlName).value as NgbDate;          
//         if(!start || !end)
//           return null;
//         let startDate = new NgbDate(start.year, start.month, start.day);
//         let endDate = new NgbDate(end.year, end.month, end.day);
        
//         if(startDate.after(endDate)){
//           return {
//             invalidDateRange: true
//           }
//         }
//         return null;  
//       }
// }

// public static dateRangeValidatorForTarget(startControlName: string, endControlName: string): ValidatorFn {
//   return function dateRangeValidatorFn(control: AbstractControl): {[key: string]: Boolean} | null{
//       let start = control.get(startControlName).value;
//       let end = control.get(endControlName).value;        
//       if(!start || !end)
//         return null;
//       let startDate = new NgbDate(parseInt(start.startYear), parseInt(start.startMonth), 0);
//       let endDate = new NgbDate(parseInt(end.endYear), parseInt(end.endMonth), 0);
      
//       if(startDate.after(endDate)){
//         return {
//           invalidDateRange: true
//         }
//       }
//       return null;  
//     }
// }



// public static confirmPassword(password: string, confirm: string): ValidatorFn{
//   return function confirmPassword(c: AbstractControl): {[key: string]: Boolean} | null{        
//       const newP = c.get(password).value;
//       const confP = c.get(confirm).value;
//       if(!newP){
//           return null;
//       }
  
//       if(newP != confP){
//           return {
//               confirmPasswordError: true
//           }
//       }
//       return null;
//   }
// }