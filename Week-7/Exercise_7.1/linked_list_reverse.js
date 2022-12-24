/*
* Given a linked list of N nodes. The task is to reverse this list.
*/

// Time complexity = O(n)
// Space complexity = O(1)


class Node{
    constructor(element){
        this.value = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(element){
        this.head = new Node(element);
        this.size = 1;
    }

    append(element){
        let node = new Node(element);
        if(this.head === null) this.head = node;
        else{
            let current = this.head;
            while(current.next != null){
                current = current .next;
            }
            current.next = node;
        }
        this.size++;
    }

    printList(){
        let current = this.head;
        let array = ["head"];
        while(current != null){
            array.push(current.value);
            current = current.next;
        }
        array.push("end");
        console.log(array.join(" --> "));
    }

    length(){
        return this.size;
    }
}

module.exports = LinkedList;

const LinkedList = require("linkedList.js");

LinkedList.prototype.reverse = function(){
    let current = this.head, prev = null,next = null, i = 0;
    this.head = null;
    if(this.size === 1) this.head = current;
    else{
        next = current.next;
        while(next !== null){
            prev = current;
            current = next;
            next = current.next;
            current.next = prev;
            if(i === 0) prev.next = null;
            i = 1;
        }
        this.head = current;
    }
    
}


let arrList = [1,2,3,4,5,6];

let list;
for(let i=0; i<arrList.length; i++){
    if(i === 0) list = new LinkedList(1);
    else{
        list.append(arrList[i]);
    }
}

console.log("Initial List");
list.printList();
list.reverse();
console.log("Reversed List");
list.printList();