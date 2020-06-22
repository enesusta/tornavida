const locale = 'tr-TR';
export const capitalizeWithTurkish = (stringParameter: string) : string => {
    return `${stringParameter.substring(0,1).toLocaleUpperCase(locale)}${stringParameter.substring(1)}`;
}