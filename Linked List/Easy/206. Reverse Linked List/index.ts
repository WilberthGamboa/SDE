

  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
     }
  }
 


function reverseList(head: ListNode | null): ListNode | null {

    if(!head)
    return null
    let prevNode: ListNode | null = null
    let currentNode: ListNode | null = head
    let nextNode:ListNode | null = null 
    while(currentNode!==null){
         nextNode = currentNode.next;
         currentNode.next = prevNode;
         prevNode = currentNode;
         currentNode = nextNode;   

    }

    

    return prevNode
};