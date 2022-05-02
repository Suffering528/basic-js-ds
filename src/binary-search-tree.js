const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(value) {
    this.rootNode = addExcept(this.rootNode, value);

    function addExcept(node, value) {
      if(!node) {
        return new Node(value);
      }

      if(node.data === value) {
        return node;
      }

      if(value < node.data) {
        node.left = addExcept(node.left, value);
      } else {
        node.right = addExcept(node.right, value);
      }
      return node;
    }
  }

  has(value) {
    return searchWithin(this.rootNode, value);
    function searchWithin(node, value) {
      if(!node) {
        return  false;
      }
      if(node.data === value) {
        return true;
      }
      return value < node.data ?
        searchWithin(node.left, value) :
        searchWithin(node.right, value);
    }
  }

  find(value) {
    return searchNodeExcept(this.rootNode, value);
    function searchNodeExcept(node, value) {
      if(node === null) {
        return null;
      }
      if(node.value === value) {
        return node;
      }
      if (value < node.data) {
        return searchNodeExcept(node.left, value);
      } else {
        return searchNodeExcept(node.right, value);
      }
    }
  }

  remove(value) {
    this.rootNode = removeMethod(this.rootNode, value);
    function removeMethod(node, value) {
      if(node === null) {
        return null;
      }
      if(value < node.data) {
        node.left = removeMethod(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeMethod(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.value;
        node.right = removeMethod(node.right, minFromRight.value);
        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};

