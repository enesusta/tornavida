export default function isUniqueChars(str: string): boolean {
    let checker: number = 0;
    const temp: string = str.toLowerCase();
    for (let i = 0; i < temp.length; ++i) {
        const val: number = temp.charCodeAt(i) - 97;
        if ((checker & (1 << val)) > 0) return false;
        checker |= (1 << val);
    }
    return true;
}
