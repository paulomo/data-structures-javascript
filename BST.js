class Node {
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class BST {
    constructor(){
        this.root = null
    }
    insert(value){
        var newNode = new Node(value);
        if (this.root === null){
            this.root = newNode;
            return this;
        }
        var currNode = this.root;
        while(currNode !== null){
            if (currNode.value < newNode.value){
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
        }
        currNode = newNode;
    }
    find(value){
        if (this.root !== null && this.root.value === value){
            return this.root;
        }
        if (this.root === null){
            return null;
        }
        var currNode = this.root;
        while(currNode !== null){
            if (currNode.value < value){
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
        }
        if (currNode === null){
            return null;
        }
        return currNode;
    }
    bfs(){
        var queue = []
        var visited = []
        var currNode = this.root;
        if (this.root !== null){
            queue.push(currNode)
        } else {
            return null
        }
        while(queue.length > 0){
            currNode = queue.shift()
            visited.push(currNode.value)
            if (currNode.left !== null){
                queue.push(currNode.left)
            }
            if (currNode.right !== null){
                queue.push(currNode.right)
            }
        }
        return visited
    }
    preOrder(){
        var visited = [];
        traverse = (node) => {
            if (node === null) return null;
            visited.push(node.value);
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root);
        return visited;
    }

    postOrder(){
        var visited = [];
        function traverse(node){
            if (node === null) return null;
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value)
        }
        traverse(this.root)
        return visited;
    }

    inOrder(){
        var visited = [];
        function traverse(node){
            if (node === null) return null;
            if(node.left) traverse(node.left);
            visited.push(node.value)
            if(node.right) traverse(node.right);
        }
        traverse(this.root)
        return visited;
    }

}

var tree = new BST();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(8);
tree.root.left.right = new Node(9);
