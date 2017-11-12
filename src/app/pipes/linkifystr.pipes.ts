
import {Pipe, PipeTransform} from "@angular/core";
import linkyfyStr from 'linkifyjs/string';

@Pipe({name: 'linkifystr'})
export class LinkifystrPipe implements PipeTransform{
    transform(str: string): string {
        return str ? linkyfyStr(str, {target:'_system'}) : str;
    }

}




