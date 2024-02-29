function uniqueOccurrences(arr) {
    const countMap = {};
        
    arr.forEach(num => {
        if (countMap[num]) {
            countMap[num] += 1;
        } else {
            countMap[num] = 1;
        }
    });

    const counts = Object.values(countMap);
    const uniqueCounts = new Set(counts);

    return counts.length === uniqueCounts.size;
}
