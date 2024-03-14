
function preOrderTraversal(node) {
    if (node !== null) {
        console.log(node.value); 
        preOrderTraversal(node.left); 
        preOrderTraversal(node.right);
    }
}
