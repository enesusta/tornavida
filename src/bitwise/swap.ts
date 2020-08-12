export default function swap(obj: any, fieldX: string, fieldY: string): void {
    obj[fieldX] = obj[fieldX] ^ obj[fieldY];
    obj[fieldY] = obj[fieldX] ^ obj[fieldY];
    obj[fieldX] = obj[fieldX] ^ obj[fieldY];
}