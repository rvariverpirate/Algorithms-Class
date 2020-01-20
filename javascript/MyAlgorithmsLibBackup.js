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
	find_next_largest_rescursive(l_idx, r_idx, x, sigma, depth){
		console.log("l_idx = ", l_idx);
		console.log("r_idx= ", r_idx);


		var l = sigma[l_idx];// l_idx can be at least 0
		var r = sigma[r_idx];// r_idx can be at least 1

		// Get the middle index
		var mid_idx = Math.floor((l_idx + r_idx)/2);// if 5 -> 4
		var mid = sigma[mid_idx];// mid value

		console.log("mid_idx = ", mid_idx);
		console.log("l = ", l);
		console.log("r = ", r);
		console.log("midVal = ", mid);


		if(r_idx == l_idx + 1){		
			let solution =  r;//r > x ? r : sigma[r_idx + 1];
			return solution;
		}
		if(depth > 10){ return -1};

		if(mid < x){// x is Greater than mid value
			// search right space
			console.log("Search Right!")
			return this.find_next_largest_rescursive(mid_idx, r_idx, x, sigma, depth + 1);
		}
		else if(x < mid){// x is Less than mid value
			// search left space
			console.log("Search Left")
			return this.find_next_largest_rescursive(l_idx, mid_idx, x, sigma, depth + 1)
		}
	}

	// Make the function call a bit easier
	find_next_largest(x, sigma){
		console.log("x = ", x);
		if(sigma.length <= 1){
			return sigma.length == 1 ? Math.max(sigma[0], x) : x;
		}
		return this.find_next_largest_rescursive(0, sigma.length - 1, x, sigma, 0);
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