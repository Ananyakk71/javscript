
//  //

  let o1 = {
      val: 10,
      next: null,
    };
  
    let o2 = {
      val: 20,
      next: null,
    };
  
    let o3 = {
      val: 30,
      next: null,
    };
    let o4 = {
      val: 40,
      next: null,
    };

    o1.next = o2;
    o2.next = o3;
    o3.next = o4;

    function addValue(val) {
        const newNode = { val: val, next: null };
        let current = o1;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }

      function removeValue(val) {
        let current = o1;
        let prev = null;
      
        if (current.val === val) {
          o1 = current.next; 
          return;
        }
      
        while (current && current.val !== val) {
          prev = current;
          current = current.next;
        }
      
        if (current) {
          prev.next = current.next;
        }
      }
      
      let current = o1;

      function clickNext() {
        if (current) {
          console.log (`${current.val}`); 
          current = current.next; 
       }
        }
      
      addValue(50);
      addValue(60);
      addValue(70);
      removeValue(30);
      removeValue(20);
      removeValue(50);
      clickNext(); 
      clickNext();
      clickNext();
      clickNext();
      
      
      

//    // Function to add a 
//   function addValue(val) {
//     const newNode = { val: val, next: null }; 
  
//     let current = o1; 
//     while (current.next) {
//       current = current.next; 
//     }
//     current.next = newNode; 
//   }
  
//   addValue(50);

//   function removeValue(val){
//     let current = o1;
//     let prev = null;

//     if (current.val === val) {
//         o1 = current.next; // Move head to the next node
//         return;
//       }

//   while (current && current.val !== val) {
//     prev = current;
//     current = current.next; // Move to the next node
//   }

//   if (current) {
//     prev.next = current.next;
//   }
// }
//   removeValue(30)
  
//   let start = o1;
//   while (start) {
//     console.log(start.val);  // Print the value of the current node
//     start = start.next;      // Move to the next node
//   }
