# remove_all_nodes_w_value_in_LL

### Problem:
Javascript
```
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

function removeNodes(head, target) { 
    // Write your code here.
    return new ListNode()
}

// Test Cases
var LL1 = new ListNode(4, new ListNode(1, new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
console.log(arrayify(removeNodes(null, 1))) // []
console.log(arrayify(removeNodes(LL1, 1))) // [4, 2, 3, 2, 2] 
console.log(arrayify(removeNodes(LL1, 2))) // [4, 3]
console.log(arrayify(removeNodes(LL1, 3))) // [4]
console.log(arrayify(removeNodes(LL1, 4))) // []
```

Python
```
class ListNode:
    def __init__(self, value = 0, next = None): 
        self.value = value
        self.next = next
        
def arrayify(head) -> [int]:
    array = []
    ptr = head
    while ptr != None:
        array.append(ptr.value)
        ptr = ptr.next
    return array

def removeNodes(head: ListNode, target: int) -> ListNode: 
    # Write your code here.
    pass

# Test Cases
LL1 = ListNode(4, ListNode(1, ListNode(2, ListNode(1, ListNode(3, ListNode(2, ListNode(2)))))))
print(arrayify(removeNodes(None, 1))) # []
print(arrayify(removeNodes(LL1, 1))) # [4, 2, 3, 2, 2]
print(arrayify(removeNodes(LL1, 2))) # [4, 3]
print(arrayify(removeNodes(LL1, 3))) # [4]
print(arrayify(removeNodes(LL1, 4))) # []
```
