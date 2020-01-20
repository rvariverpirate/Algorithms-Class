/*
CS-600 Algorithms and Data Structures
Homework and other implementations
Created by: Joseph Cannella
11/19/2020
*/

class algorithms{
	constructor(){};

	// Create ordered list to test other things
	random_ordered_list(n){// between 0 and 3*((n+1)*n)/2
		let sum = 0;
		let ordered_list = new Array(n);
		for(let i=0; i<n; i++){
			let rand_num = i*3;//Math.floor(1 + Math.random()*3);
			sum += rand_num;
			ordered_list[i] = sum;
		}
		return ordered_list;
	}


	// Need: l < x < r
	find_next_largest_rescursive(l_idx, r_idx, x, sigma){
		// Get left and right values
		var l = sigma[l_idx];// l_idx can be at least 0
		var r = sigma[r_idx];// r_idx can be at least 1

		// Get the middle index
		var mid_idx = Math.floor((l_idx + r_idx)/2);// if 5 -> 4
		var mid = sigma[mid_idx];// mid value

		if(r_idx == l_idx + 1){		
			let solution =  r;//r > x ? r : sigma[r_idx + 1];
			return solution;
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
	next_permutation(n, sigma){
		let min = sigma[n - 1];// Get the least significant element first
		let ascending = [];
		ascending.push(min);
		for(let i=n-2; n>= 0; n--){
			if(sigma[i] > sigma[i+1]){// were still ascending
				ascending.push(sigma[i]);// add it to the ascending stack
			}
			else{

			}
		}
	}
}