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

  view() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(`current nodes value is ${currentNode.value}`);

      currentNode = currentNode.next;
    }
  }
}
mySLL = new SLL().addFront(1).addFront(2).addFront(3).removefront().front();
console.log(mySLL);
