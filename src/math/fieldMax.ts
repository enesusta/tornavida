export default function fieldMax(arr: any[], prop: string): number {
  return Math.max(...arr.map(element => element[prop]));
}
