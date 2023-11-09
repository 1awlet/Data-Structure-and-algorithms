/*
Leet code explanation:
Given two strings s and t, return true if they are equal when both are typed into empty text editors.
'#' means a backspace character.
 */
 
// Define a function called backspaceCompare that takes two strings, s and t, as inputs.
var backspaceCompare = (s, t) => {
    // Initialize two arrays to store the modified strings.
    let string1 = [];
    let string2 = [];
    // Initialize a boolean variable to indicate the result of the comparison.
    let bool = false;

    // Calculate the maximum length between strings s and t.
    let len = Math.max(s.length, t.length);

    // Iterate through the characters in both strings.
    for (let i = 0; i < len; i++) {
        // Process string s:
        if (s[i]) {
            if (s[i] !== "#") {
                // If the character is not '#', add it to string1.
                string1.push(s[i]);
            } else {
                // If the character is '#', simulate a backspace by removing the last character from string1.
                string1.pop();
            }
        }

        // Process string t in the same way:
        if (t[i]) {
            if (t[i] !== "#") {
                string2.push(t[i]);
            } else {
                string2.pop();
            }
        }
    }

    // Check if the modified strings are equal in length and content.
    if (string1.length === string2.length) {
        // If both strings have a length of 0, they are equivalent.
        if (string1.length <= 0 && string2.length <= 0) {
            bool = true;
            return bool;
        }

        // Compare the characters in the modified strings.
        for (let i = 0; i < string1.length; i++) {
            if (string1[i] !== string2[i]) {
                // If characters at the same position are not equal, set bool to false and return.
                bool = false;
                return bool;
            } else {
                // If characters are equal, set bool to true.
                bool = true;
            }
        }
    } else {
        // If the modified strings have different lengths, set bool to false.
        bool = false;
    }

    // Return the final result of the comparison.
    return bool;
}
