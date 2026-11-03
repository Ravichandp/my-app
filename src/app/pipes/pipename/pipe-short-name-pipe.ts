import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeShortName',
})
export class PipeShortNamePipe implements PipeTransform {

  transform(fullname: string): string {
    const nameArray = fullname.split(' ');
    if(nameArray.length <= 1) return fullname;

    const firstname = nameArray[0].charAt(0).toUpperCase();
    const lastname = nameArray[1];

    return `${firstname}. ${lastname}`;

  }
}
