





function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

  
    let dummyNode = new ListNode(0,head)
  
    let slowPointer: ListNode | null = dummyNode;
    let fastPointer: ListNode | null = dummyNode;
  
    for (let i = 0; i<n; i++){
        fastPointer= fastPointer!.next;
    }
  
    while(fastPointer!.next!=null){
        slowPointer = slowPointer!.next
        fastPointer = fastPointer!.next
    }
  
      slowPointer!.next= slowPointer!.next!.next
  
    
  
      return dummyNode.next;
  };