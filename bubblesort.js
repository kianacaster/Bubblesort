Array.prototype.bubblesort = function() {
	for(var i = 0; i < this.length; i++){ // Loop over the array forwards (to execute the swap process the required amount of times)
		for(var j = 0; j < this.length - 1; j++){ // Loops over the array forwards again
			if(this[j] > this[j + 1]){ // If the current index value is larger than the one in front...
				this.swap(j, j+1); // Swap the values at index j and index j + 1
			}
		}
	}
	return this; // Return the array after each element has been swapped accordingly
};
