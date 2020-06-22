export const  findLongestLengthFieldOfArray = (arr: any[], prop: string)  : Number => {
    return Math.max(...arr.map(element => element[prop]));
}