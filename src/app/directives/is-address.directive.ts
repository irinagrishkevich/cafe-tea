import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[isAddress]'
})
export class IsAddressDirective {
  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;

    input.value = input.value.replace(/[^A-Za-zА-Яа-яЁё0-9\s\-\/]/g, '');
  }

}
