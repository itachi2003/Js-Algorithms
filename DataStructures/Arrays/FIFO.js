//Article: Understanding FIFO (First In, First Out) in JavaScript

//First In, First Out (FIFO) is a fundamental concept in computer science and data structures. It defines the order in which elements are added and removed from a queue. In a FIFO data structure, the first element added is the first one to be removed.

//Introduction to FIFO
//Imagine a queue in front of a ticket counter. The person who arrives first gets served first. This principle is reflected in various computer science applications, such as print job scheduling, task processing, and message queues.

//Practical Implementation in JavaScript
//Let's implement a simple queue in JavaScript to demonstrate FIFO behavior:

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    return this.isEmpty() ? null : this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage:
const fifoQueue = new Queue();

fifoQueue.enqueue("Alice");
fifoQueue.enqueue("Bob");
fifoQueue.enqueue("Charlie");

console.log("Queue:", fifoQueue.items);

const dequeuedPerson = fifoQueue.dequeue();
console.log("Dequeued Person:", dequeuedPerson);
console.log("Updated Queue:", fifoQueue.items);

//Conclusion
//Understanding and implementing FIFO principles in JavaScript is essential for various scenarios where the order of arrival matters. Whether you are designing task scheduling algorithms, managing print jobs, or handling messages in a queue, FIFO is a valuable concept to master in your programming journey.
