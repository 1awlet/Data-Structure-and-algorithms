
function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals = [];
    
    intervals.forEach(interval => {
        if (mergedIntervals.length === 0 || mergedIntervals[mergedIntervals.length - 1][1] < interval[0]) {
            mergedIntervals.push(interval);
        } else {
            // There is an overlap, so we merge the current interval with the last interval of mergedIntervals.
            mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], interval[1]);
        }
    });
    
    return mergedIntervals;
}
