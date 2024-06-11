export const floatFormat = (num: number | string): number => {
    if (typeof num === 'string') num = parseFloat(num)
    return parseFloat(num.toFixed(3))
}