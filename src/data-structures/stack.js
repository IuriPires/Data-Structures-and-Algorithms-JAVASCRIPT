/*
The stack data-structure
*/


/* Array implementation O(n) */
export class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.count = 0;
    this.items = [];
  }
}

/* Object implementation O(1) */
export class StackObjectImplementation {
  constructor() {
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count];
    delete this.items[this.count];
    this.count--;

    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;

    console.log(objString);
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }
}
