class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SLL {
  constructor(startList = []) {
    this.head = null;
    startList?.forEach((item) => this.addBack(item));
  }
  addFront(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
  addBack(value) {
    const newNode = new Node(value);
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.next === null) {
        currentNode.next = newNode;
        return this;
      }
      currentNode = currentNode.next;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
  removeFront() {
    this.head = this.head.next;
  }
  front() {
    document.write(`Front value is: ${this.head.value}`);
  }
  view() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(`Node value is: ${currentNode.value}`);
      currentNode = currentNode.next;
    }
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
      count += 1;
      currentNode = currentNode.next;
    }
    return count;
  }

  //Crea el método max() para devolver el valor más grande de la lista.
  max() {
    // identifica el valor más grande de la lista
    let currentNode = this.head;
    let maxNumber = currentNode.value;
    while (currentNode) {
      if (maxNumber < currentNode.value) {
        maxNumber = currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return maxNumber;
  }

  //
  avg() {
    let currentNode = this.head;
    let suma = 0;
    let count = 0;
    while (currentNode) {
      count++;
      suma += currentNode.value;
      currentNode = currentNode.next;
    }
    return suma / count;
  }

  addMiddle(value, idx) {
    if (this.length() > idx && idx > 0) {
      let newNode = new Node(value);
      let currentNode = this.head;
      let count = 0;
      while (currentNode) {
        if (idx - 1 === count) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          return this;
        }
        count++;
        currentNode = currentNode.next;
      }
    } else if (idx <= 0) {
      return this.addFront(value);
    } else {
      return this.addBack(value);
    }
  }
  reverse() {
    let temp = this.head;
    let previous = null,
      current = null;
    while (temp != null) {
      current = temp;
      temp = temp.next;
      current.next = previous;
      previous = current;
      this.head = current;
    }
    return this;
  }
}

const lista = new SLL([1, 2, 3]);

// console.log(lista.max());
lista.view();

console.log("first");

lista.reverse().view();

// console.log(lista.avg())
