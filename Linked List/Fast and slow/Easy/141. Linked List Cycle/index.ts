



  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
      }
 }
 

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false;
  
    let slowPointer: ListNode | null = head;
    let fastPointer: ListNode | null = head;
  
    while (fastPointer && fastPointer.next) { // Aseguramos que fastPointer y su next existen
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next!; // slowPointer siempre tiene next en este punto
  
      if (fastPointer === slowPointer) {
        return true;
      }
    }
  
    return false;
  }