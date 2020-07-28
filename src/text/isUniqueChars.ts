export default function isUniqueChars(str: string): boolean {
    let checker: number = 0;
    for (let i = 0; i< str.length; ++i) {
        const val: number = str.charCodeAt(i) - 97;
        if ((checker & (1 << val)) > 0) return false;
        checker |= (1 << val);
    }
    return true;
}
