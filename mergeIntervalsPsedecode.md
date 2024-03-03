Algorithm MergeIntervals(intervals):
    Sort intervals by their start time
    Initialize mergedIntervals as an empty list

    For each interval in intervals:
        # If the list of merged intervals is empty or if the current interval
        # does not overlap with the last interval in mergedIntervals:
        If mergedIntervals is empty OR currentInterval's start > lastInterval in mergedIntervals's end:
            Add currentInterval to mergedIntervals
        Else:
            # There is an overlap, so we merge the current interval with the last interval of mergedIntervals.
            Update the end of the last interval in mergedIntervals to be the maximum of
            the last interval's end and the current interval's end
    
    #  Return the list of merged intervals.
    Return mergedIntervals

