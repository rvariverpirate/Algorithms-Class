/*
CS-600 Algorithms and Data Structures
Homework and other implementations
Created by: Joseph Cannella
11/19/2020
*/

class algorithms{
	constructor(){};


	// Generate a ramdon number in a range
	rand_int(min, max){
		return Math.floor(Math.random()*(min+max) + min - 1);
	}

	// Create ordered list to test other things
	random_ordered_list(n){// between 0 and 3*((n+1)*n)/2
		let sum = 0;
		let ordered_list = new Array(n);
		for(let i=0; i<n; i++){
			let rand_num = i*3;
			sum += rand_num;
			ordered_list[i] = sum;
		}
		return ordered_list;
	}

	// Create random list of unique vals (this is called a set)
	random_unique_list(n, min, max){
		let i = 0;
		let uniqueList = new Array(n);
		let uniqueVals = new Map();
		while(i<n){
			let randVal = this.rand_int(min, max);
			if(!uniqueVals.has(randVal)){
				uniqueVals.set(randVal, i);
				uniqueList[i] = randVal;
				i++;
			}
		}
		return uniqueList;
	}


	// This is basically jsut a modified Binary Search Algorithm
	// Runtime should be O(log(n))
	// Need: sigma[i] < x < sigma[i+1]
	find_next_largest_rescursive(l_idx, r_idx, x, sigma){
		// Get left and right values
		var l = sigma[l_idx];// l_idx can be at least 0
		var r = sigma[r_idx];// r_idx can be at least 1

		// Get the middle index
		var mid_idx = Math.floor((l_idx + r_idx)/2);// if 5 -> 4
		var mid = sigma[mid_idx];// mid value

		if(r_idx == l_idx + 1){
			if(r > x){// results converged and the value was found
				return [r, r_idx];// want value and its index
			}
			// Otherwise no element was found that is greater than x
			console.log("No Greater Element Found!!");
			console.log("Returning x and prospective location to append it to array")
			return [x, r_idx+1];
		}

		if(mid < x){// x is Greater than mid value
			// search right space
			return this.find_next_largest_rescursive(mid_idx, r_idx, x, sigma);
		}
		else if(x < mid){// x is Less than mid value
			// search left space
			return this.find_next_largest_rescursive(l_idx, mid_idx, x, sigma)
		}
		else return this.find_next_largest_rescursive(l_idx, r_idx, x+1, sigma);// x == mid, make work for non-unique
	}

	// Make the function call a bit easier
	find_next_largest(x, sigma){
		// Safety check
		if(sigma.length <= 1){
			return sigma.length == 1 ? Math.max(sigma[0], x) : x;
		}
		return this.find_next_largest_rescursive(0, sigma.length - 1, x, sigma);
	}

	// Homework 1 Question 1
	// Note: this will only work on permutations w/ unique digits
	// Worst case is if the array is it's maximum possible permutation
	// i.e sorted from largest to smallest
	// in this case the runtime is O(n)
	next_permutation(sigma){
		let n = sigma.length;
		let min = sigma[n - 1];// Get the least significant element first
		let ascending = [];
		ascending.push(min);
		let smallerDigit;
		let inflectionPoint;
		for(let i=n-1; i>= 0; i--){
			if(sigma[i-1] > sigma[i]){// were still ascending
				ascending.push(sigma[i-1]);// so add it to the ascending array
			}
			else{// We have found the lowest magnitude location (i+1)
				// whos digit can be swapped with the digit of a
				// lower magnitude position with a digit greater than itself
				// Basically a point of inflection..
				inflectionPoint = i-1;
				break;
			}
		}
		smallerDigit = sigma[inflectionPoint];
		// Note: this implies the array "ascending" is an ordered list
		// so lets perform a search of the ordered list..
		// Note: because we itterated in reverse we reversed it's order (which we wanted anyway)
		let nextLargestData = algs.find_next_largest(smallerDigit, ascending);
		let nextLargestDigit = nextLargestData[0];// This contains the next largest value
		let nextLargestIndex = nextLargestData[1];// the index of the next largest data

		// Swap
		// Let's now place this digit into the point of inflection
		sigma[inflectionPoint] = nextLargestDigit;

		// And let's place the inflection value into the the nextLargest old location
		ascending[nextLargestIndex] = smallerDigit;

		// Now update the last k elemnents in sigma with the values from ascending
		let beginning = n - ascending.length;
		let k = 0;
		for(let j=beginning; j<n; j++){
			sigma[j] = ascending[k];
			k++;
		}
		return sigma;
	}
}