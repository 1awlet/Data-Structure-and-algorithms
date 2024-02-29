function uniqueOccurrences(arr) {
    const countMap = {};
     // Count occurrences of each number
    arr.forEach(num => {
        if (countMap[num]) {
            countMap[num] += 1;
        } else {
            countMap[num] = 1;
        }
    });

    const counts = Object.values(countMap);
    const uniqueCounts = new Set(counts);
    // Check if the length of counts array is the same as the uniqueCounts Set
    return counts.length === uniqueCounts.size;
}
