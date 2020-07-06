export default function sortDescByField(arr: any[], key: string): any[] {
  return arr.sort((a: any, b: any) => {
    return a[key] - b[key];
  }).reverse();
}
