import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(text: string, size: 'short' | 'medium'): string {
    if(text.length <= 15) return text;

    const stringLength = size == 'short' ? 15 : 50;

    var textCut = text.slice(0, stringLength);

    text.trim();
    
    textCut += "...";

    return textCut;
  }

}
