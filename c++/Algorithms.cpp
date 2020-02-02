/*#include <iostream>
#include <math.h>
#include <map>
#include <string>
#include <vector>
using namespace std;
*/
/*class Algorithms{
    public:
        int rand_int(int min, int max);
        void random_unique_list(vector<int> arr, int min, int max);
        int * find_next_largest_recursive(int l_idx, int r_idx, int & sigma);
        int * find_next_largest(int x, int & sigma);
        int * next_permutation(int & sigma);
        template <typename T>
        void print_array(vector<T> array){
            int length = array.size();
            cout << "{ ";
            for(int i=0; i< length; i++){
                cout << array[i];
                if(i != length - 1){
                    cout << ", ";
                }  
            }
            cout << " }";
        };
};

// Generate a random number in a given range
int Algorithms::rand_int(int min, int max){
    return (min + rand()) % max;
}

// Create random list of unique vals (Called a set)
void Algorithms::random_unique_list(vector<int> uniqueList, int min, int max){
    int i = 0;
    int n = uniqueList.size();//sizeof(uniqueList)/sizeof(uniqueList[0]);
    cout << 12 <<  "what fresh hell is this?";
    //map<int, bool> uniqueVals;
    //int randVal;
    //pair<int, bool> kvp;// Key Value Pair
    while(i <= n){
        cout << "Something bad is happening here" << std::endl;
        randVal = rand_int(min, max);
        // check if the value is in the map
        if(uniqueVals.find(randVal) != uniqueVals.end()){
            // The value is allready in the list so don't add it
            cout << "Something bad is happening here" << std::endl;
        }
        else{// The value is unique so add it
            cout << randVal << " ";
            uniqueList.push_back(randVal);
            kvp.first = randVal;// Key
            kvp.second = true;// Value
            uniqueVals.insert(kvp);
            i++;
        }
    }
}


int main(){
    cout<<"Homework 1:";
    Algorithms myAlg;
    vector<int> values(30);

    int i;
    cout << "Please enter an integer value: ";
    cin >> i;
    //cout << "The value you entered is " << i;
    //cout << " and its double is " << i*2 << ".\n";


    myAlg.random_unique_list(values, 3, 40);
    myAlg.print_array(values);
    return 0;
}*/
