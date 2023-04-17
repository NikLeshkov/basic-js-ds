const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    const newNode = new Node(data);

    if(!this.base) {
      this.base = newNode;
      return;
    }

    let currentNode = this.base;

    while(true) {
      if(currentNode.data > newNode.data) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if(currentNode.data < newNode.data) {
        if(!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        break;
      }
    }



  }

  find(data) {
    if(!this.base) return null;
    let currentNode = this.base;

    while(true) {
      if(currentNode.data === data) {
        return currentNode;
      } else if (currentNode.data > data) {
        if(!currentNode.left) return null;
        currentNode = currentNode.left;
      } else if (currentNode.data < data) {
        if(!currentNode.right) return null;
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    if (this.find(data)) return true;
    else return false;
  }

  remove(data) {
    this.base = removeRoot(this.base, data);
  
    function removeRoot(currentNode, data) {
      if (!currentNode) return null;

      if (data > currentNode.data) {
        currentNode.right = removeRoot(currentNode.right, data);
      } else if (data < currentNode.data) {
        currentNode.left = removeRoot(currentNode.left, data);
      } else {
        if (!currentNode.left) {
          return currentNode.right;
        } else if (!currentNode.right) {
          return currentNode.left;
        } else {
          let minValue = currentNode.right;
          while (minValue.left) {
            minValue = minValue.left;
          }
          currentNode.data = minValue.data;
          currentNode.right = removeRoot(currentNode.right, minValue.data);
        }
      }
      return currentNode;
    }
  }

  min() {
    if(!this.base) return this.base;

    let currentNode = this.base;

    while(true) {
      if(currentNode.left) currentNode = currentNode.left;
      else return currentNode.data;
    }
  }

  max() {
    if(!this.base) return this.base;

    let currentNode = this.base;

    while(true) {
      if(currentNode.right) currentNode = currentNode.right;
      else return currentNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};