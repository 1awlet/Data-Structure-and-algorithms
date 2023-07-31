/*Approach
Basically get next node and make it point to the previous node (we store reversed nodes it in a variable ), 
but keep in mind before changing the next node to point to the previous node we have to store it in temp variable in order to finish our loop

Complexity
Time complexity: 0(n)
Space complexity: 0(1)

*/

var reverseList = function(head) {
    let currentNode = head;
    let prev=null;

    while(currentNode !== null){
     let next = currentNode.next;
     currentNode.next= prev;
     prev=currentNode;
     currentNode= next;

    }

  return prev
};
