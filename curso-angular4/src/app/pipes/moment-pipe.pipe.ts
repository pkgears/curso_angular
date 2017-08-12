import { Pipe, PipeTransform } from "@angular/core"
import * as moment from 'moment'

@Pipe({
 name: 'moment'
})

export class MomentPipePipe implements PipeTransform  {

  transform(value: any, outputFormart: string = 'lll',
            locale: string = 'en',
            inputFormat: string ='YYYY-MM-DD hh:mm:ss'):any{

    moment.locale(locale);

    const output = outputFormart != 'relative' ?
      moment(value, inputFormat).format(outputFormart) :
      moment(value, inputFormat).fromNow();

    return output;
  };

 }
