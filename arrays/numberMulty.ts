export function numberMultiply(array: Array<number>, targetMultiply: number){
    for( let i = 0; i < array.length - 1; i ++ ) {
		for( let j = array.length - 1; j > i; j -- ) {
			if(array[i] * array[j]  === targetMultiply ) {
				return [array[i], array[j]]
			}
		}
	}	
	return [];
}