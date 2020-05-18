"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
function bubbleSort(array) {
    var sorted = false;
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
exports.bubbleSort = bubbleSort;
