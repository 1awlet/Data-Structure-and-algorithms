class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }


     // Adds an element to the back of the queue
    enqueue(value) {
        let newNode = new Node(value);
        if (this.rear === null) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    // Removes and returns the element at the front of the queue
    dequeue() {
        if (this.front === null) {
            console.log("Queue is empty!");
            return null;
        }
        let temp = this.front;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        this.size--;
        return temp.value;
    }


      peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }
        return this.front.value;
    }

    // Checks if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

}

}
