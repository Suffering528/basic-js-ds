const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if(this.length === 0) {
      this.head = node;
      this.length++;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }  
  }

  dequeue() {
    let actual = this.head;
    let prev;

    while (actual.next) {
      prev = actual;
      actual = actual.next
    }

    if(prev === null) {
      if(actual === null) {
        return null;
      } else {
        this.head = null;
        return this.head;
      }
    }

    prev.next = null;
    this.length--;
    return actual.value;
  }
}

module.exports = {
  Queue
};
