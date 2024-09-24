#include <iostream>
#include <vector>
using namespace std;
 
void selectionSort(vector<int>& arr) {
    int n = arr.size();

    // Traverse through all array elements
    for (int i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted part
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        swap(arr[minIndex], arr[i]);
    }
}
