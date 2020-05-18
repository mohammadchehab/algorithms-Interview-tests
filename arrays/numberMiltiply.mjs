export function numberMultiply(array, targetMultiply) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = array.length - 1; j > i; j--) {
            if (array[i] * array[j] === targetMultiply) {
                return [array[i], array[j]];
            }
        }
    }
    return [];
}