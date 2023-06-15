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
    if (this.head != null) {
      let counter = 1;
      let current = this.head;

      while (current.nextNode != null) {
        current = current.nextNode;
        counter++;
      }

      console.log("total items in list", counter);
      return counter;
    } else {
      return 0;
    }
  }

  getHead() {
    //returns first node in list
    if (this.head != null) {
      console.log("test", this.head);
      return this.head;
    } else {
      return 1;
    }
  }

  getTail() {
    //returns last node in list
    if (this.head != null) {
      let current = this.head;

      while (current.nextNode != null) {
        current = current.nextNode;
      }

      let lastItem = current;
      console.log("tail of list:", lastItem);
      return lastItem;
    }
  }

  at(index) {
    if (this.head != null) {
      let current = this.head;

      for (let i = 1; i < index; i++) {
        current = current.nextNode;
      }
      console.log(`item at position ${index}:`, current);
      return current;
    } else {
      return "error";
    }
  }

  pop() {
    let previousNode = null;
    if (this.head != null) {
      let current = this.head;
      while (current.nextNode != null) {
        previousNode = current;
        current = current.nextNode;
      }
      previousNode.nextNode = null;
    }
  }

  contains(value) {
    let current = this.head;

    while (current.nextNode != null) {
      current = current.nextNode;
      if (current.value == value) {
        console.log("true");
        return true;
      }
    }
    console.log("false");
    return false;
  }

  find(value) {
    let current = this.head;
    let counter = 1;

    while (current.nextNode != null) {
      current = current.nextNode;
      counter++;
      if (current.value == value) {
        console.log(`index of ${value}:`, counter);
        return counter;
      }
    }
    console.log("not found");
    return "not found";
    // returns the index of the node containing value, or null if not found.
  }

  toString() {
    let current = this.head;
    let stringedList = "";

    while (current.nextNode != null) {
      console.log(` ${current.value} ---> `);
      stringedList += `${current.value} ---> `;
      current = current.nextNode;
    }

    stringedList += "null";
    console.log("null");
    console.log(`head: ${stringedList}`);
    return `head: ${stringedList}`;
  }

  insertAt(value, index) {
    //that inserts a new node with the provided value at the given index.
  }

  removeAt(index) {
    let previousNode = null;
    let remainingList = null;
    let current = this.head;
    let counter = 1;

    if (index == 1) {
      this.head = current.nextNode;
      return this.toString();
    }

    for (let i = 1; i < index; i++) {
      previousNode = current;
      current = current.nextNode;
      if (current == null) {
        console.log("error. Item not found")
        return "error. Item not found"
      }
    }
    previousNode.nextNode = current.nextNode;

    console.log("remove at", this.toString());
    return this.toString;

    // if (this.head == null) {
    //   return "empty list"
    // }

    // if (index == 1) {
    //   this.head = current.nextNode
    //   return this.toString();
    // }

    // while (current.nextNode != null) {
    //   counter++;
    //   previousNode = current;
    //   current = current.nextNode;
    //   if (counter == index) {
    //     // console.log(`index to delete of ${value}:`, counter);
    //     remainingList = current.nextNode
    //     previousNode.nextNode = remainingList;
    //     return this.toString();
    //   }
    // }
    // console.log("not found");
    // return "not found";
  }
}

let list = new LinkedList();
list.append("string");
list.append("string2");
list.append("string3");
console.log("old", list);
list.prepend("string4");
list.append("string5");
list.append("string6");
list.getTail();
list.append("string7");
list.pop();
list.pop();
list.getTail();

console.log("new with prepend", list);
list.size();
list.getHead();
list.at(1);
list.at(5);
list.contains("string5"); //true
list.find("string5");
list.contains("string8"); //false
list.toString();
console.log("delete test");
list.removeAt(7);
// list.removeAt(3)
// list.removeAt(2)
// list.removeAt(2)
// list.removeAt(1)
