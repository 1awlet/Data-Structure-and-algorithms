// Define a Node class to represent individual nodes in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define a LinkedList class to represent the linked list itself
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node to the end of the linked list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Display the linked list
  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Reverse the linked list
 reverse(){
    let prev=null; 
    let current=this.head;
    let next= null;

    while(current){
        next= current.next;
    
        current.next=prev;
        prev=current;

        current=next;
    }
    this.head=prev;
     
 }
 
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
  current=this.head;
  let prevs;
  let nexts=null;
  
  while(current){
        
    
      while(current.data >= left && current.data <= right){
       console.log(current.data)
       nexts= current.next;
       prevs=current;
       current=nexts;
      }
      console.log(prevs)
      
    current = current.next;
  }
  
  

  console.log("Left Previous:", leftPrev);
  console.log("Right Next:", rightNext);
}

}

// Create a new linked list and add elements to it
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.append(6);
myList.append(7);

// Display the original linked list
console.log("Original Linked List:");

// Reverse the linked list
myList.findLeftAndRight(3,5)



