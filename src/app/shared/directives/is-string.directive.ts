import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[isString]'
})
export class IsStringDirective {
  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^A-Za-zА-Яа-яЁё]/g, '');
  }

}
