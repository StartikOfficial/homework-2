import { backgroundColors, effects, fontColors, Reset } from './model';
export function addColor(text: string, color: string, isBackground:boolean = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList:string[]) {
    return effectList.map((effect:string) => effects[effect]).join('');
}

interface Option {
    font?: string;
    background?: string;
    effects?: string[];
}

export function color(text:string, options:Option) {
    
    const preparedText:string = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
