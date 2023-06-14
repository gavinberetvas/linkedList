// import { Node } from "./nodeClass";

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(value) {
    //adds a new node containing value to the end of the list
  }

  prepend(value) {
    // adds a new node containing value to the start of the list
    //presumably within the head object.
  }

  size() {
    // returns the total number of nodes in the list
    // recursively search through nested object and count++ on each nest
  }

  head() {
    //returns first node in list
  }

  tail() {
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
console.log(list);
