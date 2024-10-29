import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[isNumber]'
})
export class IsNumberDirective {
  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;
    value = value.replace(/(?!^\+)\D/g, '');
    if (!value.startsWith('+')) {
      value = value.replace(/^\+/, '');
    }
    const digitsOnly = value.replace(/\D/g, '');
    if (digitsOnly.length > 11) {
      value = value.slice(0, value.length - (digitsOnly.length - 11));
    }

    input.value = value;
  }

}
