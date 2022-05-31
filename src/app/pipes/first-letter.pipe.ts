import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(fullName: string): any {
    const firstLetter = fullName.split(" ").map(n => n[0]).join("");
    return firstLetter + "."
  }

}
