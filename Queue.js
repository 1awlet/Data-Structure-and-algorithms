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


}
