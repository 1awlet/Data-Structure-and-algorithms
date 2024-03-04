
function findSubsets(set) {
    function explore(index, currentSubset) {
        // Base case, if the index is equal to the length of the set, add the current subset to the list of all subsets
        if (index === set.length) {
            allSubsets.push([...currentSubset]);
            return;
        }

        //  include the current element in the subset
        currentSubset.push(set[index]);
        explore(index + 1, currentSubset);

        //  exclude the current element from the subset and explore further
        currentSubset.pop();
        explore(index + 1, currentSubset);
    }

    const allSubsets = [];
    explore(0, []);
    return allSubsets;
}


const mySet = [1, 2, 3];
console.log(findSubsets(mySet));
