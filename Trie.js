class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false; // isEndOfWord is true if the node represents the end of a word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

   // Inserts a word into the trie
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Searches if the word is in the trie
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }



   // Returns if there is any word in the trie that starts with the given prefix
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
