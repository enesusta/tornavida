export default function reverse(str: string): string {
    let count: number = 0;
    let temp: Array<string> = [...str];
    for (let i = str.length - 1; i >= 0; i--) temp[count++] = str.charAt(i);
    return temp.join('');
}