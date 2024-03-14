
function postOrderTraversal(node) {
    if (node !== null) {
        postOrderTraversal(node.left);  
        postOrderTraversal(node.right);  
        console.log(node.value);  
    }
}
