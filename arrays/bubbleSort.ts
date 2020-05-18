
export function bubbleSort(array: Array<number>) {
    let sorted: boolean = false;

    while (!sorted) {
        sorted = true;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                var tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                sorted = false;
            }
        }
    }
    return array;
}
