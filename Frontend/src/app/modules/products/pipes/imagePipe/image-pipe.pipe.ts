import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {

  transform(imageUrl: string): string {
    return `/assets/${imageUrl}`;
  }

}
