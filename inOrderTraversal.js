function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);  
        console.log(node.value);  
        inOrderTraversal(node.right); 
    }
}
