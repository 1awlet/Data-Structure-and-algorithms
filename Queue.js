class Queue {
    constructor() {
        this.items = [];
    }

    // Adds an element to the back of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Removes and returns the element at the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }
        return this.items.shift();
    }


        // Returns the element at the front of the queue without removing it
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }
        return this.items[0];
    }

    // Checks if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Returns the size of the queue
    size() {
        return this.items.length;
    }

      // Prints the elements in the queue
    printQueue() {
        let elements = "";
        for (let item of this.items) {
            elements += item + " ";
        }
        console.log(elements);
    }
}


let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log("Front item is: " + myQueue.front());
