// // User defined class node
// class Node {
//     // constructor
//     constructor(element)
//     {
//         this.element = element;
//         this.next = null
//     }
// }
// const node1 = new Node(10); // Create a new node 
// const node2 = new Node(20); // Create another node with data 20
// node1.next = node2;         // Link node1 to node
// console.log(node1);
// console.log(node2);

// //linkedlist class
// class LinkedList{
//     constructor()
//     {
//         this.head = null;
//         this.size = 0;
//     }
//     add(element) {
//         let node = new Node(element);
//         let current;

//         if (this.head == null) {
//             this.head = node;
//         } else {
//             current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = node;
//         }
//         this.size++;
//     }

//     insertAt(element,index){
//         if(index < 0 || index > this.size)
//             return console.log("enter");
//         else {
//             let node = new Node(element);
//             let curr, prev;
//             curr = this.head;

//             if (index == 0){
//                 node.next = this.head; 
//                 this.head = node;
//             } else {
//                 curr = this.head;
//                 let it = 0;
//                 while(it < index){
//                     it++;
//                     prev = curr;
//                     curr = curr.next;
//                 }
//                 node.next = curr;
//                 prev.next = node;
//             }
//             this.size++;
//         }
//     }
//     removeFrom(index)
// {
//     if (index < 0 || index >= this.size)
//         return console.log("Please Enter a valid index");
//     else {
//         let curr, prev, it = 0;
//         curr = this.head;
//         prev = curr;

//         // deleting first element
//         if (index === 0) {
//             this.head = curr.next;
//         } else {
//             // iterate over the list to the
//             // position to remove an element
//             while (it < index) {
//                 it++;
//                 prev = curr;
//                 curr = curr.next;
//             }

//             // remove the element
//             prev.next = curr.next;
//         }
//         this.size--;

//         // return the remove element
//         return curr.element;
//     }
// }
// }


// class Node {
//     constructor(element)
//     {
//         this.element = element;
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor()
//     {
//         this.head = null;
//         this.size = 0;
//     }

//     add(element) {
//         let node = new Node(element);
//         let current;

//         if (this.head == null)
//             this.head = node;
//         else {
//             current = this.head;
    
//             while (current.next) {
//                 current = current.next;
//             }
    
//             current.next = node;
//         }
//         this.size++;
//     }
// {
//     let current = this.head;
//     let prev = null;


//     while (current != null) {

//         if (current.element === element) {
//             if (prev == null) {
//                 this.head = current.next;
//             } else {
//                 prev.next = current.next;
//             }
//             this.size--;
//             return current.element;
//         }
//         prev = current;
//         current = current.next;
//     }
//     return -1;
// }
// display() {
//     let current = this.head;
//     let elements = [];
    
//     while (current != null) {
//         elements.push(current.element);  // Add the current node's element to the array
//         current = current.next;          // Move to the next node
//     }
    
//     console.log(elements.join(" -> "));  // Output the elements as a string
// }
// }
// let list = new LinkedList();
// list.add(10);
// list.add(20);
// list.add(30);

// list.display();  

// list.removeElement(20);

// console.log("After removal:");
// list.display();  

class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);
        let current;

        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    removeElement(element) {
        let current = this.head;
        let prev = null;

        while (current != null) {
 
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }



}


let ll = new LinkedList();



// adding element to the list
ll.add(10);




// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);




