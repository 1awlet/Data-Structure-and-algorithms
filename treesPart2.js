class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



      
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a node in the BST
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }


     // Search for a node with a given value
    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this._searchNode(node.left, value);
        } else if (value > node.value) {
            return this._searchNode(node.right, value);
        } else {
            return true; // Value is found
        }
    }


    nOrderTraverse(callback) {
        this._inOrderTraverseNode(this.root, callback);
    }

    _inOrderTraverseNode(node, callback) {
        if (node !== null) {
            this._inOrderTraverseNode(node.left, callback);
            callback(node.value);
            this._inOrderTraverseNode(node.right, callback);
        }
    }

     // Pre-order traversal: root, left, right
    preOrderTraverse(callback) {
        this._preOrderTraverseNode(this.root, callback);
    }

    _preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.value);
            this._preOrderTraverseNode(node.left, callback);
            this._preOrderTraverseNode(node.right, callback);
        }
    }

    // Post-order traversal: left, right, root
    postOrderTraverse(callback) {
        this._postOrderTraverseNode(this.root, callback);
    }

    _postOrderTraverseNode(node, callback) {
        if (node !== null) {
            this._postOrderTraverseNode(node.left, callback);
            this._postOrderTraverseNode(node.right, callback);
            callback(node.value);
        }
    }

}



const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

console.log("In-order traversal:");
bst.inOrderTraverse(value => console.log(value));

console.log("Pre-order traversal:");
bst.preOrderTraverse(value => console.log(value));

console.log("Post-order traversal:");
bst.postOrderTraverse(value => console.log(value));

// Search for a value
console.log("Search for 10:", bst.search(10)); 
console.log("Search for 2:", bst.search(2)); 
