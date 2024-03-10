Function createTargetArray(values, indices):
    Initialize targetArray as an empty array
    
    For each index in the range of values:
        Get the value from values at the current index
        Get the corresponding index from indices at the current index
        
        If the target index is equal to the length of targetArray:
            Append the value to targetArray
        Else:
            Insert the value at the specified index in targetArray
        
    Return targetArray

