class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SLL {
  constructor() {
    this.head = null;
  }

  addFront(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    return this;
  }
  removefront() {
    this.head = this.head.next;
    return this;
  }
  front() {
    return `El valor al frente es ${this.head.value}`;
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  length() {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }
  display() {
    let currentNode = this.head;
    let list = [];
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }
  max() {
    let currentNode = this.head;
    let max = currentNode.value;
    while (currentNode) {
      if (max < currentNode.value) {
        max = currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return max;
  }
  min() {
    let currentNode = this.head;
    let min = currentNode.value;
    while (currentNode) {
      if (min > currentNode.value) {
        min = currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return min;
  }
  average() {
    let currentNode = this.head;
    let suma = 0;
    let count = 0;
    while (currentNode) {
      suma += currentNode.value;
      count++;
      currentNode = currentNode.next;
    }
    return suma / count;
  }
  view() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(`current nodes value is ${currentNode.value}`);

      currentNode = currentNode.next;
    }
  }
}
mySLL = new SLL()
  .addFront(3)
  .addFront(3)
  .addFront(3)
  .addFront(3)
  .addFront(3)
  .addFront(3)
  .average();
console.log(mySLL);
