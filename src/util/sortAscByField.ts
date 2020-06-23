export const sortAscByField = (arr: any[], key: string) : any[] => {
    return arr.sort((a: any, b: any) => {
        return a[key] - b[key];
    });
}