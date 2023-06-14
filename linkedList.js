class Node {
  constructor(value, nextNode) {
    this.value = null || value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    //adds a new node containing value to the end of the list
    let object = new Node(value);

    if (this.head == null) {
      this.head = object;
    } else {
      let current = this.head;

      while (current.nextNode != null) {
        current = current.nextNode;
      }

      current.nextNode = object;
    }
  }

  prepend(value) {
    // adds a new node containing value to the start of the list
    let object = new Node(value);

    if (this.head == null) {
      this.head = object;
    }

    object.nextNode = this.head;
    this.head = object;
  }

  size() {
    // returns the total number of nodes in the list
    // recursively search through nested object and count++ on each nest

    // head: {
    //         value: 6
    //         next: {
    //             value: 10
    //             next: {
    //                 value: 12
    //                 next: {
    //                     value: 3
    //                     next: null
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // };

  }

  getHead() {
    //returns first node in list
    if (this.head != null) {
    console.log("test", this.head)
    return this.head
    } else {
      return 1
    }
  }

  getTail() {
    //returns last node in list
  }

  at(index) {
    //returns the node at given index? like the number?
  }

  pop() {
    //removes the last element from the list
  }

  contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false.
  }

  find(value) {
    // returns the index of the node containing value, or null if not found.
  }

  toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be:
    // ( value ) -> ( value ) -> ( value ) -> null
  }

  insertAt(value, index) {
    //that inserts a new node with the provided value at the given index.
  }

  removeAt(index) {
    //that removes the node at the given index.
  }
}

let list = new LinkedList();
list.append("string");
list.append("string2");
list.append("string3");
console.log("old", list);
list.prepend("string4");
console.log("new with prepend", list);


list.getHead()
