/*
Leet code explanation: Given the head of a singly linked list and two integers left and right where left <= right,
reverse the nodes of the list from position left to position right, and return the reversed list.
*/



//Finding left and right
findLeftAndRight(left, right) {
  let leftPrev = null;
  let rightNext = null;
  let current = this.head;
  let prev = null;

  while (current) {
      let next = current.next;
 
    if (next.data === left) {
      leftPrev = current.data;
        break;
    }
    prev = current.data;
    current = current.next;
  }
  
    while (current) {
      let next = current.next;
 
    if (current.data === right) {
      rightNext = next.data;
        break;
    }
    prev = current.data;
    current = current.next;
  }

  console.log("Left Previous:", leftPrev);
  console.log("Right Next:", rightNext);
}

