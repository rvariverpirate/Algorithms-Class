// Create a node class
// this will contain the nodes vale and which array it belongs to
class HeapNode{
    constructor(value, origin){
        this.value = value;
        this.origin = origin;
    }
}

// Create a Min Heap Class
class MinHeap{
    constructor(A){
        this.arrayLength = A.length;
        this.heap = A;
        this.heapSize = A.length;
        this.BuildMinHeap(this.heap);
    }
    // Recursively Heapith a Vlaue "bubble down"
    MinHeapify(i){
        let l = 2*i+1;
        let r = 2*i+2;
        let smallest = i;// Index of smallest element
        console.log("this.heap[i] = ", this.heap[i]);
        if(l < this.heapSize && this.heap[l].value < this.heap[i].value){
            smallest = l;
            console.log("l");
        }
        if(r < this.heapSize && this.heap[r].value < this.heap[i].value){
            smallest = r;
            console.log("r");
        }
        if(smallest != i){// swap A[i] and A[smallest]
            console.log("swap");
            let tmp = this.heap[i];
            this.heap[i] = this.heap[smallest];
            this.heap[smallest] = tmp;
            this.MinHeapify(i)
        }
    }

    // Build Min Heap from a sorted array
    BuildMinHeap(){
        let startIdx = Math.floor(this.arrayLength/2) - 1;
        for (let i = startIdx; i >= 0; i--){
            this.MinHeapify(i);
            console.log(i);
            console.log(this.heap);
        }
    }

    // Add a Heapsort Method
    HeapSort(){
        let last = this.arrayLength-1;
        for(let i=last; i>=0; i --){
            let tmp = this.heap[0];
            this.heap[0] = this.heap[i];
            this.heap[i] = tmp;
            this.heapSize = i;
            this.MinHeapify(0);
        }
        this.heap.reverse();
    }
}

// Lets generate some input values:
// k = number of lists
// l = length of each list
function generateSortedLists(k, l){
    let lists = [];
    for(let i = 0; i<k; i++){// Populate list of lists
        let list = [];
        let value = 0;
        for(let j=0; j<l; j++){// Populate individual list with values
            value += Math.ceil(Math.random()*10) + 1;// Random sorted number between 0 and 11*n
            let tmpNode = new HeapNode(value, i);
            list.push(tmpNode);// Add the node to the this list
        }
        lists.push(list);
    }
    return lists;
}

// Generate random sorted input lists
var vals = [5, 14, 20, 25, 31];
var nodes = [];
for(let i=0; i< vals.length; i++){
    node = new HeapNode(vals[i], 0);
    nodes.push(node);
}
//var sortedLists = generateSortedLists(1, 12);
//console.log(sortedLists);

// Lets test the code
//let testArray = [3, 1, 6, 5, 2, ];//expected result = [ 1, 3, 6, 5, 2 ]
console.log("Input: ");
console.log(nodes, "\n");
console.log("Creating Heap:");
var minHeap = new MinHeap(nodes.slice(0));
console.log("Result: ");
console.log(minHeap.heap), "\n";

// Lets now sort the heap
minHeap.HeapSort();
console.log("Sorted Result: ");
console.log(minHeap.heap);


// Problem: Merge k sorted lists into one sorted array of size n (total number of elements in all input arrays)
// Note: We know the set cotaining the 0th value of each sorted array must contain the minimum
// we also know that the next value in any array must be less than the previous
// Approach: A priority queue could exploit these properties 
function MergeKSortedArrays(lists){
    let h_arr = [];
    let result_size = 0;
    for(list in lists){
        
    }
    
}


