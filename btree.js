function node(val){
	this.id = val;
	this.left = null;
	this.right = null;
}

function binaryTree(){
	this.root = null;
	this.size = 0;
	
}

function stack(){
	return [];
}

function queue(){
	return [];
}

stack.prototype.push = function(val){
	this.push(val);
}

stack.prototype.pop = function(){
	return this.pop();
}

queue.prototype.add = function(val){
	this.shift(val);
}

queue.prototype.remove = function(val){
	this.unshift();
}

binaryTree.prototype.push = function(val){
	
	var root = this.root;
	
	if(!root){
		this.root = new node(val);
		this.size++;
		return;
	}
	
	var currentNode = root;
	while(currentNode){
		if(val > currentNode.id){
			if(!currentNode.right){
				currentNode.right = new node(val);
				this.size++;
				return ;
			}
			else {
				currentNode = currentNode.right;
			}
		}
		else{
			if(!currentNode.left){
				currentNode.left = new node(val);
				this.size++;
				return;
			}
			else {
				currentNode = currentNode.left;
			}
		}
	}

}

binaryTree.prototype.search = function(val){
	var root = this.root;
	var current = root;
	
	if(!root){
		return false;
		}
	
	while(current){
		if(current.id == val) return true;
		else if(current.id > val){current = current.right;}
		else if(current.id < val){current = current.left;}
	}
	
	return false;
}

binaryTree.prototype.inOrderTravel = function(){
	
} 

var tree = new binaryTree();
tree.push(10);
tree.push(4);
tree.push(11);
tree.push(2);
tree.push(1);
tree.push(5);
tree.push(9);

console.log(JSON.parse(JSON.stringify(tree)));

console.log(tree.search(29));
console.log(tree.search(10));

console.log(new stack());
