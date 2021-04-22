def removeNodes(head: ListNode, target: int) -> ListNode: 
    if not head:
        None
    sentinel = ListNode(0, head)
    prev = sentinel
    current = head
    
    while current:
        if current.value == target:            
            current = current.next
            prev.next = current
        else:
            prev = prev.next
            current = current.next
        
    return sentinel.next
